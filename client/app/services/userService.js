(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('userService', userService);

    userService.$inject = ['$http'];

    function userService($http) {

        var apiBaseAddress = 'https://nmdb.azurewebsites.net';

        var service = {
            addUser: addUser
        };

        return service;

        // TODO: add parameters 
        function addUser(userName, eMail, passWord) {

            // TODO: is it better to pass individual items or an user object. 
            // TODO: pass object?

            return $http.post(apiBaseAddress + '/api/account/register')
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