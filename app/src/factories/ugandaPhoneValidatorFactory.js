(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidatorFactory = require('./abstractPhoneValidatorFactory');
    const UgandaPhoneValidator = require('../validators/ugandaPhoneValidator');

    /**
     * Represent factory class for Uganda country phone validator
     */
    class UgandaPhoneValidatorFactory extends AbstractPhoneValidatorFactory {

        /**
         * UgandaPhoneValidatorFactory constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        createValidator(config) {
            return new UgandaPhoneValidator();
        }
    }

    module.exports = new UgandaPhoneValidatorFactory();
})();