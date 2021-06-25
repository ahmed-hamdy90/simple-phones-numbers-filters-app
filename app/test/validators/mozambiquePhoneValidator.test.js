// load modules
const assert = require('chai').assert;
const MozambiquePhoneValidator = require('../../src/validators/mozambiquePhoneValidator');
const PhoneNumberDetails = require('../../src/models/phoneNumberDetails');

describe('MozambiquePhoneValidator', () => {

    /**
     * @var {MozambiquePhoneValidator}
     */
    let validator;

    before(() => validator = new MozambiquePhoneValidator());

    it('should implement country code method', () => {
        assert.doesNotThrow(() => validator.getCountryPhoneCode());
        assert.typeOf(validator.getCountryPhoneCode(), 'string');
    });

    it('should implement getPhoneNumberWithoutCountryCodeRegex method', () => {
        assert.doesNotThrow(() => validator.getPhoneNumberWithoutCountryCodeRegex());
        assert.typeOf(validator.getPhoneNumberWithoutCountryCodeRegex(), 'string');
    });

    it('should return null for phone number not belong to country', () => {
        const result = validator.validatePhoneNumber('(2555) 847651504');

        assert.isNull(result);
    });

    it('should return PhoneNumberDetails with invalid state for phone number', () => {
        const result = validator.validatePhoneNumber('(258) 84765150433');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'NOK');
    });

    it('should return PhoneNumberDetails with valid state for phone number', () => {
        const result = validator.validatePhoneNumber('(258) 847651504');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'OK');
    });
});