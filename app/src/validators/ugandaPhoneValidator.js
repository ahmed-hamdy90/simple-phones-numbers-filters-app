(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidator = require('./abstractPhoneValidator');

    /**
     * Represent phone number validator class for Uganda country
     */
    class UgandaPhoneValidator extends AbstractPhoneValidator {

        /**
         * UgandaPhoneValidator constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        getCountryPhoneCode() {
            return '256';
        }

        /**
         * {@inheritDoc}
         */
        getPhoneNumberWithoutCountryCodeRegex() {
            return `^(\\d{9})$`;
        }
    }

    module.exports = UgandaPhoneValidator;
})();