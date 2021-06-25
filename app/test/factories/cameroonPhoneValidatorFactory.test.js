// load configuration
const configuration = require(`../../src/config/config.test.json`);

// load modules
const assert = require('chai').assert;
const CameroonPhoneValidatorFactory = require('../../src/factories/cameroonPhoneValidatorFactory');
const AbstractPhoneValidator = require('../../src/validators/abstractPhoneValidator');
const CameroonPhoneValidator = require('../../src/validators/cameroonPhoneValidator');

describe('CameroonPhoneValidatorFactory', () => {

    it('should return an instance from AbstractPhoneValidator', () => {
        const validator = CameroonPhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, AbstractPhoneValidator);
    });

    it('should return an instance from CameroonPhoneValidator', () => {
        const validator = CameroonPhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, CameroonPhoneValidator);
    });
});