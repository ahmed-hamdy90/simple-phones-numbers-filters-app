(function () {
    'use strict';

    // load modules
    const customerDBSeeder = require('./src/seeds/customer.seeder');

    /**
     * load available Db seeder loaders process
     */
    const loadDbSeed = function () {
        // load customer collection DB seeder
        customerDBSeeder();
    }

    loadDbSeed();
})();