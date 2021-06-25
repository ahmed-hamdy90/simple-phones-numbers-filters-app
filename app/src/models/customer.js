(function () {
    'use strict';

    // load modules
    const mongoDbAdapter = require('../adapters/mongoDbAdapter');

    /**
     * Represent Customer Mongoose Collection schema
     * @type {{phone: number, name: string, userId: string}}
     */
    const customerSchema = {
        userId: 'number',
        name: 'string',
        phone: 'string'
    };

    module.exports = mongoDbAdapter.createModel('Customer', customerSchema);
})();