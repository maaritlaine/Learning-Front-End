(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('userService', userService);

    userService.$inject = ['$http', 'loginService'];

    function userService($http, loginService) {

        var apiBaseAddress = 'https://nmdb.azurewebsites.net';

        var service = {
            addUser: addUser
        };

        return service;

        function addUser(user) {

            var config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            return $http.post(apiBaseAddress + '/api/account/register', user, config.headers)
                 .then(function (result) {
                     return result.data;
                 });
        }

        function getToken() {

            return $http.get(apiBaseAddress + '/api/account/register')
                 .then(function (result) {
                     return result.data;
                 });
        }

    }
})();

// Reviews by movieId: /api/v1/movies/:id/reviews
// Ratings by movieId: /api/v1/movies/:id/ratings