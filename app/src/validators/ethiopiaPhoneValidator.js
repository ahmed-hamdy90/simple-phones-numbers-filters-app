(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidator = require('./abstractPhoneValidator');

    /**
     * Represent phone number validator class for Ethiopia country
     */
    class EthiopiaPhoneValidator extends AbstractPhoneValidator {

        /**
         * EthiopiaPhoneValidator constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        getCountryPhoneCode() {
            return '251';
        }

        /**
         * {@inheritDoc}
         */
        getPhoneNumberWithoutCountryCodeRegex() {
            return `^([1-59]\\d{8})$`;
        }
    }

    module.exports = EthiopiaPhoneValidator;
})();