// load modules
const assert = require('chai').assert;
const UgandaPhoneValidator = require('../../src/validators/ugandaPhoneValidator');
const PhoneNumberDetails = require('../../src/models/phoneNumberDetails');

describe('UgandaPhoneValidator', () => {

    /**
     * @var {UgandaPhoneValidator}
     */
    let validator;

    before(() => validator = new UgandaPhoneValidator());

    it('should implement country code method', () => {
        assert.doesNotThrow(() => validator.getCountryPhoneCode());
        assert.typeOf(validator.getCountryPhoneCode(), 'string');
    });

    it('should implement getPhoneNumberWithoutCountryCodeRegex method', () => {
        assert.doesNotThrow(() => validator.getPhoneNumberWithoutCountryCodeRegex());
        assert.typeOf(validator.getPhoneNumberWithoutCountryCodeRegex(), 'string');
    });

    it('should return null for phone number not belong to country', () => {
        const result = validator.validatePhoneNumber('(300) 775069443');

        assert.isNull(result);
    });

    it('should return PhoneNumberDetails with invalid state for phone number', () => {
        const result = validator.validatePhoneNumber('(256) 775069443020');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'NOK');
    });

    it('should return PhoneNumberDetails with valid state for phone number', () => {
        const result = validator.validatePhoneNumber('(256) 775069443');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'OK');
    });
});