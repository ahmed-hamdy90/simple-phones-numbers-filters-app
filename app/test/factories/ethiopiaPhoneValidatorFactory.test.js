// load configuration
const configuration = require(`../../src/config/config.test.json`);

// load modules
const assert = require('chai').assert;
const EthiopiaPhoneValidatorFactory = require('../../src/factories/ethiopiaPhoneValidatorFactory');
const AbstractPhoneValidator = require('../../src/validators/abstractPhoneValidator');
const EthiopiaPhoneValidator = require('../../src/validators/ethiopiaPhoneValidator');

describe('EthiopiaPhoneValidatorFactory', () => {

    it('should return an instance from AbstractPhoneValidator', () => {
        const validator = EthiopiaPhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, AbstractPhoneValidator);
    });

    it('should return an instance from EthiopiaPhoneValidator', () => {
        const validator = EthiopiaPhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, EthiopiaPhoneValidator);
    });
});