// load configuration
const configuration = require(`../../src/config/config.test.json`);

// load modules
const assert = require('chai').assert;
const UgandaPhoneValidatorFactory = require('../../src/factories/ugandaPhoneValidatorFactory');
const AbstractPhoneValidator = require('../../src/validators/abstractPhoneValidator');
const UgandaPhoneValidator = require('../../src/validators/ugandaPhoneValidator');

describe('UgandaPhoneValidatorFactory', () => {

    it('should return an instance from AbstractPhoneValidator', () => {
        const validator = UgandaPhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, AbstractPhoneValidator);
    });

    it('should return an instance from UgandaPhoneValidator', () => {
        const validator = UgandaPhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, UgandaPhoneValidator);
    });
});