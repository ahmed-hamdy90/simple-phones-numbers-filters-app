(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidator = require('./abstractPhoneValidator');

    /**
     * Represent phone number validator class for Morocco country
     */
    class MoroccoPhoneValidator extends AbstractPhoneValidator {

        /**
         * MoroccoPhoneValidator constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        getCountryPhoneCode() {
            return '212';
        }

        /**
         * {@inheritDoc}
         */
        getPhoneNumberWithoutCountryCodeRegex() {
            return `^([5-9]\\d{8})$`;
        }
    }

    module.exports = MoroccoPhoneValidator;
})();