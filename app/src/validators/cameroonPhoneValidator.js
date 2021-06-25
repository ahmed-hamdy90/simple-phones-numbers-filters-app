(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidator = require('./abstractPhoneValidator');

    /**
     * Represent phone number validator class for Cameroon country
     */
    class CameroonPhoneValidator extends AbstractPhoneValidator {

        /**
         * CameroonPhoneValidator constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        getCountryPhoneCode() {
            return '237';
        }

        /**
         * {@inheritDoc}
         */
        getPhoneNumberWithoutCountryCodeRegex() {
            return `^([2368]\\d{7,8})$`;
        }
    }

    module.exports = CameroonPhoneValidator;
})();