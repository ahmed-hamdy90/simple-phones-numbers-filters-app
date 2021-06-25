(function () {
    'use strict';

    // load modules
    const PhoneNumberDetails = require('../models/phoneNumberDetails');

    /**
     * Represent modal which include relation between phone number details and it's country details
     */
    class CountryPhoneData {

        /**
         * country unique ID value
         * @var {string}
         */
        countryId;

        /**
         * Country name value
         * @var {string}
         */
        countryName;

        /**
         * phone details which belong to this country
         * @var {PhoneNumberDetails}
         */
        phone;

        /**
         * CountryPhoneData constructor
         * @param {string} id country's id value
         * @param {string} name country's name value
         * @param {PhoneNumberDetails} phoneDetails full phone number details
         */
        constructor(id, name, phoneDetails) {
            this.countryId = id;
            this.countryName = name;
            this.phone = phoneDetails;
        }
    }

    module.exports = CountryPhoneData;
})();
