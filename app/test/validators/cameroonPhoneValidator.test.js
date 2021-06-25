// load modules
const assert = require('chai').assert;
const CameroonPhoneValidator = require('../../src/validators/cameroonPhoneValidator');
const PhoneNumberDetails = require('../../src/models/phoneNumberDetails');

describe('cameroonPhoneValidator', () => {

    /**
     * @var {CameroonPhoneValidator}
     */
    let validator;

    before(() => validator = new CameroonPhoneValidator());

    it('should implement country code method', () => {
        assert.doesNotThrow(() => validator.getCountryPhoneCode());
        assert.typeOf(validator.getCountryPhoneCode(), 'string');
    });

    it('should implement getPhoneNumberWithoutCountryCodeRegex method', () => {
        assert.doesNotThrow(() => validator.getPhoneNumberWithoutCountryCodeRegex());
        assert.typeOf(validator.getPhoneNumberWithoutCountryCodeRegex(), 'string');
    });

    it('should return null for phone number not belong to country', () => {
        const result = validator.validatePhoneNumber('(23) 677046616');

        assert.isNull(result);
    });

    it('should return PhoneNumberDetails with invalid state for phone number', () => {
        const result = validator.validatePhoneNumber('(237) 67704661600');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'NOK');
    });

    it('should return PhoneNumberDetails with valid state for phone number', () => {
        const result = validator.validatePhoneNumber('(237) 677046616');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'OK');
    });
});