(function () {
    'use strict';

    // load modules
    const AbstractPhoneValidator = require('../validators/abstractPhoneValidator');

    /**
     * Represent the main abstract factory class for any phone validators factory,
     * apply AbstractFactory design pattern
     */
    class AbstractPhoneValidatorFactory {

        /**
         * AbstractPhoneValidatorFactory constructor
         */
        constructor() {
            if (this.constructor === AbstractPhoneValidatorFactory) {
                throw new TypeError('This Class is abstract class, can\'t initialize instance from it');
            }
        }

        /**
         * Create an instance from Phone validator
         * @param {*} config represent application configuration details
         * @return {AbstractPhoneValidator} return a validator instance
         */
        createValidator(config) {
            throw new TypeError('This abstract method');
        }
    }

    module.exports = AbstractPhoneValidatorFactory;
})();