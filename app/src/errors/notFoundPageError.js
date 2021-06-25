(function () {
    'use strict';

    /**
     * Represent custom Error will need to throw in case request invalid page
     */
    class NotFoundPageError extends Error {

        /**
         * NotFoundPageError constructor
         * @param {string} message error's message value
         */
        constructor(message) {
            super(message);
            this.name = "NotFoundPageError";
        }
    }

    module.exports = NotFoundPageError;
})();