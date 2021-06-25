(function () {
    'use strict';

    // load configuration
    const environment = process.env.NODE_ENV || 'development';
    const configuration = require(`../config/config.${environment}.json`);
    const availableCountriesConfig = require(`../config/availableCountries.json`);

    // load modules
    const express = require('express');
    const PhoneNumbersService = require('../services/phoneNumbers.service');

    // initialize express's router instance
    const router = express.Router();

    // define possible routes
    router.get('/', (req, res) => {
        const countryQueryParam = (req.query.country) ? req.query.country : "";
        const validationState = (req.query.state) ? req.query.state : "";
        const criteria = {};
        if (countryQueryParam) {
            criteria['country'] = countryQueryParam;
        }
        if (validationState) {
            criteria['validationState'] = validationState;
        }
        PhoneNumbersService
            .listPhoneNumbers(criteria, 0, 20,
                countriesPhonesData => {
                    res.render('home', {
                        'selectedState': validationState,
                        'selectedCountry': countryQueryParam,
                        'countries': availableCountriesConfig,
                        'countriesPhonesData': countriesPhonesData
                    });
                },
                error => {
                    console.error(error);
                    res.render('error', {
                        error: (error.hasOwnProperty('message')) ? error.message : ''
                    });
                });
    });

    module.exports = router;
})();