(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidator = require('./abstractPhoneValidator');

    /**
     * Represent phone number validator class for Mozambique country
     */
    class MozambiquePhoneValidator extends AbstractPhoneValidator {

        /**
         * MozambiquePhoneValidator constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        getCountryPhoneCode() {
            return '258';
        }

        /**
         * {@inheritDoc}
         */
        getPhoneNumberWithoutCountryCodeRegex() {
            return `^([28]\\d{7,8})$`;
        }
    }

    module.exports = MozambiquePhoneValidator;
})();