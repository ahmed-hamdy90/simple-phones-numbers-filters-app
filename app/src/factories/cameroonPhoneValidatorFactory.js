(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidatorFactory = require('./abstractPhoneValidatorFactory');
    const CameroonPhoneValidator = require('../validators/cameroonPhoneValidator');

    /**
     * Represent factory class for Cameroon country phone validator
     */
    class CameroonPhoneValidatorFactory extends AbstractPhoneValidatorFactory {

        /**
         * CameroonPhoneValidatorFactory constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        createValidator(config) {
            return new CameroonPhoneValidator();
        }
    }

    module.exports = new CameroonPhoneValidatorFactory();
})();