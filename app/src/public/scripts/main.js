(function (window, doc) {
    'use strict';

    // add onChange event listener
    var stateSelector = doc.getElementById('stateSelector');
    var countrySelector = doc.getElementById('countrySelector');

    if (stateSelector) {
        stateSelector.addEventListener('change', function () {
            var queryParams = [];
            if (stateSelector.value.length !== 0) {
                queryParams.push(`state=${stateSelector.value}`);
            }
            if (countrySelector && countrySelector.value.length !== 0) {
                queryParams.push(`country=${countrySelector.value}`);
            }
            window.location.href = (queryParams.length !== 0) ? `/app?${queryParams.join('&')}` : `/app`;
        });
    }

    if (countrySelector) {
        countrySelector.addEventListener('change', function () {
            var queryParams = [];
            if (countrySelector.value.length !== 0) {
                queryParams.push(`country=${countrySelector.value}`);
            }
            if (stateSelector && stateSelector.value.length !== 0) {
                queryParams.push(`state=${stateSelector.value}`);
            }
            window.location.href = (queryParams.length !== 0) ? `/app?${queryParams.join('&')}` : `/app`;
        });
    }

})(window, document);
