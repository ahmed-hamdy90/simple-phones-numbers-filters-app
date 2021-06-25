(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidatorFactory = require('./abstractPhoneValidatorFactory');
    const MoroccoPhoneValidator = require('../validators/moroccoPhoneValidator');

    /**
     * Represent factory class for Morocco country phone validator
     */
    class MoroccoPhoneValidatorFactory extends AbstractPhoneValidatorFactory {

        /**
         * MoroccoPhoneValidatorFactory constructor
         */
        constructor() {
            super();
        }

        /**
         * {@inheritDoc}
         */
        createValidator(config) {
            return new MoroccoPhoneValidator();
        }
    }

    module.exports = new MoroccoPhoneValidatorFactory();
})();