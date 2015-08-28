(function () {
    'use strict';

    angular
        .module('NMDb')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', '$cookieStore', 'commonService'];

    function loginService($http, $cookieStore, commonService) {

        var apiBaseAddress = 'https://nmdb.azurewebsites.net';

        var service = {
            getToken: getToken,
            getTokenHeader: getTokenHeader
        };

        return service;

        function getToken(username, password) {

            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };

            var data = {
                username: username,
                password: password,
                grant_type: "password"
            };

            // TODO: sorruin tässä kohtaa tyypilliseen javascript scope/injection/funktion suoritus
            // -ongelmaan, jota en saanu ratkaistua. Tän ois tarkoitus olla eri funktiossa.
            var pairs = [];
            for (var item in data) {
                pairs.push(item + '=' + data[item]);
            }

            var body = pairs.join('&').replace(/%20/g, '+');
            console.log('body ' + body);

            return $http.post(apiBaseAddress + '/token', body, config)
                        .then(function (response) {
                            console.log('ONNISTUI!');
                            // TODO: mikä on oikea paikka tän tallentamiseen, kontrolleri vai täällä?
                            // Miten **tussa tokenin saa talteen jonnekin. ngStoragen lisääminen ei oikeen menny putkeen.
                            // Minkään uuden referenssin
                            return response;
                        })
                        .catch(function (error) {
                            console.log('VIRHE.');
                            return error;
                        });
            
        }

        function getTokenHeader() {

            var config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + $cookieStore.get('SESSION_TOKEN')
                }
            };

            return config;
        }


    }
})();