(function () {
    'use strict';

    angular
        .module('NMDb')
        .factory('commonService', commonService);

    commonService.$inject = ['$http'];

    function commonService($http) {


        var apiBaseAddress = 'https://nmdb.azurewebsites.net';

        var service = {
            formEncode: formEncode,
            encodeUriQuery: encodeUriQuery
        };

        return service;


        function formEncode() {
            return function (data) {
                var pairs = [];
                for (var name in data) {
                    console.log('name ' + name);
                    pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
                }
                return pairs.join('&').replace(/%20/g, '+');
            };
        }

        function encodeUriQuery(val, pctEncodeSpaces) {
            return encodeURIComponent(val).
              replace(/%40/gi, '@').
              replace(/%3A/gi, ':').
              replace(/%24/g, '$').
              replace(/%2C/gi, ',').
              replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
        }


    }
})();