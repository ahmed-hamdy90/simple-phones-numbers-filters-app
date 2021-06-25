// load configuration
const configuration = require(`../../src/config/config.test.json`);

// load modules
const assert = require('chai').assert;
const MoroccoPhoneValidatorFactory = require('../../src/factories/moroccoPhoneValidatorFactory');
const AbstractPhoneValidator = require('../../src/validators/abstractPhoneValidator');
const MoroccoPhoneValidator = require('../../src/validators/moroccoPhoneValidator');

describe('MoroccoPhoneValidatorFactory', () => {

    it('should return an instance from AbstractPhoneValidator', () => {
        const validator = MoroccoPhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, AbstractPhoneValidator);
    });

    it('should return an instance from MoroccoPhoneValidator', () => {
        const validator = MoroccoPhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, MoroccoPhoneValidator);
    });
});