(function () {
    'use strict';

    // load modules
    const PhoneNumberDetails = require('../models/phoneNumberDetails');

    /**
     * Represent the main abstract class for any Phone validators of specific country
     */
    class AbstractPhoneValidator {

        /**
         * AbstractPhoneValidator constructor
         */
        constructor() {
            if (this.constructor === AbstractPhoneValidator) {
                throw new TypeError('This Class is abstract class, can\'t initialize instance from it');
            }
        }

        /**
         * Retrieve the phone code for country,
         * which need ito phone validating process {@see isPhoneNumberBelongToCountry} and {@see validatePhoneNumber}
         * @return {string} country code value
         */
        getCountryPhoneCode() {
            throw new TypeError('This abstract method');
        }

        /**
         * Retrieve the regular expression value for phone number excluding country code value
         * which need ito phone validating process {@see isPhoneNumberBelongToCountry} and {@see validatePhoneNumber}
         * @return {string} regular expression value
         */
        getPhoneNumberWithoutCountryCodeRegex() {
            throw new TypeError('This abstract method');
        }

        /**
         * Retrieve the regular expression value for country code of phone number
         * which need ito phone validating process {@see isPhoneNumberBelongToCountry} and {@see validatePhoneNumber}
         * @return {string} regular expression value
         */
        getCountryCodeRegex() {
            return `^\\(${this.getCountryPhoneCode()}\\)`;
        }

        /**
         * Determine whether given phone number belong to this country ot not
         * @param {string} fullNumber full phone number value include country code which need to check it
         * @return {boolean} True if given number was belong to this country, otherwise False
         */
        isPhoneNumberBelongToCountry(fullNumber) {
            const matchResult = fullNumber.match(this.getCountryCodeRegex());

            return (matchResult && Array.isArray(matchResult) && matchResult.length > 0);
        }

        /**
         * Validate given full phone number(include code country) to extract phone details
         * only if given phone was belong to this country.
         * @param {string} fullNumber full phone number value include country code which need to validate
         * @return {null| PhoneNumberDetails} return phone number details, otherwise null if invalid for this country
         */
        validatePhoneNumber(fullNumber) {
            // first check if given phone number already belong to this country
            if (!this.isPhoneNumberBelongToCountry(fullNumber)) {
                return null;
            }
            // then remove country code from number
            const countryCodeRegex = new RegExp(this.getCountryCodeRegex());
            const numberWithoutCountryCode = fullNumber.replace(countryCodeRegex, '').trim();
            // finally validate phone number state
            const matchResult = numberWithoutCountryCode.match(this.getPhoneNumberWithoutCountryCodeRegex());
            const phoneValidateState =
                (matchResult && Array.isArray(matchResult) && matchResult.length > 0) ? 'OK' : 'NOK';

            return new PhoneNumberDetails(this.getCountryPhoneCode(), numberWithoutCountryCode,
                phoneValidateState);
        }
    }

    module.exports = AbstractPhoneValidator;
})();