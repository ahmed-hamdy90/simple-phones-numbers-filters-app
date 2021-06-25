(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidatorFactory = require('./abstractPhoneValidatorFactory');
    const MozambiquePhoneValidator = require('../validators/mozambiquePhoneValidator');

    /**
     * Represent factory class for Mozambique country phone validator
     */
    class MozambiquePhoneValidatorFactory extends AbstractPhoneValidatorFactory {

        /**
         * MozambiquePhoneValidatorFactory constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        createValidator(config) {
            return new MozambiquePhoneValidator();
        }
    }

    module.exports = new MozambiquePhoneValidatorFactory();
})();