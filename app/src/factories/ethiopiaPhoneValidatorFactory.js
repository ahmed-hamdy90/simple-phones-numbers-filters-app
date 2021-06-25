(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidatorFactory = require('./abstractPhoneValidatorFactory');
    const EthiopiaPhoneValidator = require('../validators/ethiopiaPhoneValidator');

    /**
     * Represent factory class for Ethiopia country phone validator
     */
    class EthiopiaPhoneValidatorFactory extends AbstractPhoneValidatorFactory {

        /**
         * EthiopiaPhoneValidatorFactory constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        createValidator(config) {
            return new EthiopiaPhoneValidator();
        }
    }

    module.exports = new EthiopiaPhoneValidatorFactory();
})();