(function () {
    'use strict';

    /**
     * Represent model class for phone number details
     */
    class PhoneNumberDetails {

        /**
         * Country code value for phone
         * @var {string}
         */
        code;

        /**
         * Extract phone number value without country code
         * @var {string}
         */
        number;

        /**
         * Phone validation state
         * @var {'OK'|'NOK'} OK if given number already valid for this country phone role, otherwise NOK is not valid
         */
        state;

        /**
         * PhoneNumberDetails constructor
         * @param {string} countryCode phone's country code value
         * @param {string} number phone number without country code
         * @param {'OK'|'NOK'} state phone validation state
         */
        constructor(countryCode, number, state) {
            this.code = countryCode;
            this.number = number;
            this.state = state;
        }
    }

    module.exports = PhoneNumberDetails;
})();