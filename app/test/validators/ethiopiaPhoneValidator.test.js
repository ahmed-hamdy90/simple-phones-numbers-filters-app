// load modules
const assert = require('chai').assert;
const EthiopiaPhoneValidator = require('../../src/validators/ethiopiaPhoneValidator');
const PhoneNumberDetails = require('../../src/models/phoneNumberDetails');

describe('EthiopiaPhoneValidator', () => {

    /**
     * @var {EthiopiaPhoneValidator}
     */
    let validator;

    before(() => validator = new EthiopiaPhoneValidator());

    it('should implement country code method', () => {
        assert.doesNotThrow(() => validator.getCountryPhoneCode());
        assert.typeOf(validator.getCountryPhoneCode(), 'string');
    });

    it('should implement getPhoneNumberWithoutCountryCodeRegex method', () => {
        assert.doesNotThrow(() => validator.getPhoneNumberWithoutCountryCodeRegex());
        assert.typeOf(validator.getPhoneNumberWithoutCountryCodeRegex(), 'string');
    });

    it('should return null for phone number not belong to country', () => {
        const result = validator.validatePhoneNumber('(250) 924418461');

        assert.isNull(result);
    });

    it('should return PhoneNumberDetails with invalid state for phone number', () => {
        const result = validator.validatePhoneNumber('(251) 9924418461');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'NOK');
    });

    it('should return PhoneNumberDetails with valid state for phone number', () => {
        const result = validator.validatePhoneNumber('(251) 924418461');

        assert.isNotNull(result);
        assert.instanceOf(result, PhoneNumberDetails);
        assert.deepEqual(result.state, 'OK');
    });
});