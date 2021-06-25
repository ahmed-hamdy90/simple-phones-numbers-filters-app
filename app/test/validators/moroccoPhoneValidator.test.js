// load modules
const assert = require('chai').assert;
const MoroccoPhoneValidator = require('../../src/validators/moroccoPhoneValidator');
const PhoneNumberDetails = require('../../src/models/phoneNumberDetails');

describe('MoroccoPhoneValidator', () => {

    /**
     * @var {MoroccoPhoneValidator}
     */
    let validator;

    before(() => validator = new MoroccoPhoneValidator());

    it('should implement country code method', () => {
        assert.doesNotThrow(() => validator.getCountryPhoneCode());
        assert.typeOf(validator.getCountryPhoneCode(), 'string');
    });

    it('should implement getPhoneNumberWithoutCountryCodeRegex method', () => {
        assert.doesNotThrow(() => validator.getPhoneNumberWithoutCountryCodeRegex());
        assert.typeOf(validator.getPhoneNumberWithoutCountryCodeRegex(), 'string');
    });

    it('should return null for phone number not belong to country', () => {
        const result = validator.validatePhoneNumber('(02) 698054317');

        assert.isNull(result);
    });

    it('should return PhoneNumberDetails with invalid state for phone number', () => {
        const result = validator.validatePhoneNumber('(212) 6007989253');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'NOK');
    });

    it('should return PhoneNumberDetails with valid state for phone number', () => {
        const result = validator.validatePhoneNumber('(212) 698054317');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'OK');
    });
});