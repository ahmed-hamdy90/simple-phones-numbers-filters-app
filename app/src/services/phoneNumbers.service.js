(function () {
    'use strict';

    // load configuration
    const environment = process.env.NODE_ENV || 'development';
    const configuration = require(`../config/config.${environment}.json`);
    const availableCountriesConfig = require(`../config/availableCountries.json`);

    // load modules
    const path = require('path');
    const MongoDbAdapter = require('../adapters/mongoDbAdapter');
    const CustomerModel = require('../models/customer');
    const CountryPhoneData = require('../models/countryPhoneData');
    const AbstractPhoneValidatorFactory = require('../factories/abstractPhoneValidatorFactory');
    const AbstractPhoneValidator = require('../validators/abstractPhoneValidator');

    /**
     * Represent service class which responsible for logic related to countries phone numbers
     */
    class PhoneNumbersService {

        /**
         * Mongo DB adapter instance
         * @member {MongoDbAdapter}
         */
        mongoDbAdapter;

        /**
         * MongoDB Customers model instance
         * @member {CustomerModel}
         */
        customerModel;

        /**
         * list of available countries data and their phones validators instances
         * @member {Object}
         */
        availableCountriesDetailsAndValidator;

        /**
         * PhoneNumbersService constructor
         * @param {*} appConfig application configuration details
         * @param {Array} availableCountriesConfig list of available countries configuration
         * @param {MongoDbAdapter} mongoDbAdapter mongoDB adapter instance
         * @param {CustomerModel} customerModel mongoDB customer model instance
         */
        constructor(appConfig, availableCountriesConfig, mongoDbAdapter, customerModel) {
            this.mongoDbAdapter = mongoDbAdapter;
            this.customerModel = customerModel;
            this.availableCountriesDetailsAndValidator =
                this.loadAvailablePhoneValidators(appConfig, availableCountriesConfig);
        }

        /**
         * List the Phones numbers and their countries details
         * @param {*} criteria filtering criteria need to apply on listing phones numbers process
         * @param {number} offset the beginning number will begin listing phones numbers process from it
         * @param {number} limit the maximum total number of phones numbers will return
         * @param {function} successCallback callback function will be fire when listing phones numbers process
         * complete successfully
         * @param {function} errorCallback callback function will be fire when listing phones numbers process failed
         */
        listPhoneNumbers(criteria = {}, offset = 0, limit = 20, successCallback, errorCallback) {
            const filterByPhoneState =
                (criteria.hasOwnProperty('validationState') &&
                    (criteria['validationState'] === 'OK' || 'NOK')) ? criteria['validationState'] : undefined;
            const filterByCountryId =
                (criteria.hasOwnProperty('country')) ? criteria['country'] : undefined;
            if (filterByCountryId) {
                // getting country data and it's validator, if not exists return empty list
                if (!this.availableCountriesDetailsAndValidator.hasOwnProperty(filterByCountryId)) {
                    successCallback([]);
                }
                const countryDetailsAndValidator =
                    this.availableCountriesDetailsAndValidator[`${filterByCountryId}`];
                this.mongoDbAdapter
                    .findByCriteria(this.customerModel,
                        {phone: {$regex: countryDetailsAndValidator.validator.getCountryCodeRegex()}},
                        customers => {
                            const countriesPhonesData =
                                this.applyPhoneValidationOnRetrievedCustomerDetails(customers,
                                    countryDetailsAndValidator, filterByPhoneState);
                            successCallback(countriesPhonesData);
                        },
                        error => errorCallback(error))
            } else {
                // get all available countries data and their validator
                const countriesDetailsAndValidators =
                    Object.values(this.availableCountriesDetailsAndValidator);
                this.mongoDbAdapter
                    .findAll(this.customerModel,
                        customers => {
                            const countriesPhonesData =
                                this.applyPhoneValidationOnRetrievedCustomerDetails(customers,
                                    countriesDetailsAndValidators, filterByPhoneState);
                            successCallback(countriesPhonesData);
                        }, error => errorCallback(error));
            }
        }

        /**
         * Load all available countries on the system to load their factories to create validator instance,
         * return object include country unique ID as key and value include country name,
         * loaded validator instance
         * @example
         * {
         *     'CAM': {
         *         id: 'CAM',
         *         name: "Cameroon",
         *         validator: CameroonPhoneValidator // instance from this class
         *     }
         * }
         * @param {*} appConfig
         * @param {Object[]} availableCountriesConfig
         * @return {Object}
         */
        loadAvailablePhoneValidators(appConfig, availableCountriesConfig) {
            const countriesDetails = {};
            for (let country of availableCountriesConfig) {
                /** @var {AbstractPhoneValidatorFactory} load factory instance **/
                const factory = require(path.join(__dirname, `../${country.phoneValidatorFactoryPath}`));
                countriesDetails[`${country.id}`] = {
                    id: country.id,
                    name: country.name,
                    validator: factory.createValidator(appConfig)
                };
            }

            return countriesDetails;
        }

        /**
         * Perform phone validation process on phones under given retrieved customers
         * then return list of country and phone details list, also able to filtering returned list
         * according to phone validation state.
         * @param {CustomerModel[]} customers list of retrieved customers data
         * @param {Object|Object[]} countriesDetailsAndPhonesValidators list of countries details and validator instances
         * or one instances if we known which country need to apply phone validation on it
         * @param {'OK'|'NOK'|undefined} restrictOnPhoneValidationState filtering returned result on phone validation state
         * @return {CountryPhoneData[]}
         */
        applyPhoneValidationOnRetrievedCustomerDetails(customers, countriesDetailsAndPhonesValidators,
                                                       restrictOnPhoneValidationState = undefined) {
            const countriesPhonesData = [];
            // loop on retrieved customers list
            if (customers && Array.isArray(customers) && customers.length !== 0) {
                for (let customer of customers) {
                    let phoneNumberDetails;
                    let countryAndValidatorDetails;
                    if (Array.isArray(countriesDetailsAndPhonesValidators)) {
                        // check if will check on phone with different validator
                        // to check which phone is belong to for this country
                        for (let countryAndValidator of countriesDetailsAndPhonesValidators) {
                            phoneNumberDetails =
                                countryAndValidator.validator.validatePhoneNumber(customer.phone);
                            if (phoneNumberDetails) {
                                countryAndValidatorDetails = countryAndValidator;
                                break;
                            }
                        }
                    } else if (typeof countriesDetailsAndPhonesValidators === 'object') {
                        // otherwise will check on only given validator
                        // to check which phone is belong to for this country
                        phoneNumberDetails =
                            countriesDetailsAndPhonesValidators.validator.validatePhoneNumber(customer.phone);
                        countryAndValidatorDetails = countriesDetailsAndPhonesValidators;
                    }
                    // check if phone has been complete validation process successfully
                    if (phoneNumberDetails) {
                        /** before add to {@see countriesPhonesData} list,
                         * check if given check for phone validation state **/
                        if (restrictOnPhoneValidationState !== undefined &&
                            phoneNumberDetails.state !== restrictOnPhoneValidationState) {
                            continue;
                        }
                        countriesPhonesData.push(
                            new CountryPhoneData(countryAndValidatorDetails.id, countryAndValidatorDetails.name,
                                phoneNumberDetails));
                    }
                }
            }
            return countriesPhonesData;
        }
    }

    module.exports = new PhoneNumbersService(configuration, availableCountriesConfig, MongoDbAdapter,
        CustomerModel);
})();
