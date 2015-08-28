(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('ratingService', ratingService);

    ratingService.$inject = ['$http', 'loginService'];

    function ratingService($http, loginService) {

        var apiBaseAddress = 'https://nmdb.azurewebsites.net';

        var service = {
            getRatings: getRatings,
            getUserRatings: getUserRatings,
            getRating: getRating,
            addRating:addRating,
            updateRating: updateRating,
            deleteRating: deleteRating
        };

        return service;

        function getRatings(movieId) {
            return $http.get(apiBaseAddress + '/api/v1/movies/' + movieId + '/ratings')
            .then(function (result) {
                return result.data;
            });
        }

        function getUserRatings(movieId) {

            //TODO: use token
            return $http.get(apiBaseAddress + '/api/v1/movies/' + movieId + '/ratings')
            .then(function (result) {
                return result.data;
            });
        }

        function getRating(ratingId) {
            return $http.get(apiBaseAddress + '/api/v1/ratings/' + ratingId)
            .then(function (result) {
                return result.data;
            });
        }

        function addRating(rating) {

            var headers = loginService.getTokenHeader();

            return $http.post(apiBaseAddress + '/api/v1/ratings/', rating, headers)
            .then(function (result) {
                return result.data;
            });
        }

        function updateRating(rating) {

            var headers = loginService.getTokenHeader();

            return $http.put(apiBaseAddress + '/api/v1/ratings/' + rating.id, rating, headers)
            .then(function (result) {
                return result.data;
            });
        }

        function deleteRating(rating) {

            var headers = loginService.getTokenHeader();

            return $http.delete(apiBaseAddress + '/api/v1/ratings/' + rating.id, rating, headers)
            .then(function (result) {
                return result.data;
            });
        }

        


    }
})();