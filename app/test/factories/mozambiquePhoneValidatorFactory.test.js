// load configuration
const configuration = require(`../../src/config/config.test.json`);

// load modules
const assert = require('chai').assert;
const MozambiquePhoneValidatorFactory = require('../../src/factories/mozambiquePhoneValidatorFactory');
const AbstractPhoneValidator = require('../../src/validators/abstractPhoneValidator');
const MozambiquePhoneValidator = require('../../src/validators/mozambiquePhoneValidator');

describe('MozambiquePhoneValidatorFactory', () => {

    it('should return an instance from AbstractPhoneValidator', () => {
        const validator = MozambiquePhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, AbstractPhoneValidator);
    });

    it('should return an instance from MozambiquePhoneValidator', () => {
        const validator = MozambiquePhoneValidatorFactory.createValidator(configuration);

        assert.isNotNull(validator);
        assert.isDefined(validator);
        assert.instanceOf(validator, MozambiquePhoneValidator);
    });
});