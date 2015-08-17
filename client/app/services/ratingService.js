(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('ratingService', ratingService);

    ratingService.$inject = ['$http'];

    function ratingService($http) {

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

        // TODO: token, content, put
        function addRating() {
            return $http.post(apiBaseAddress + '/api/v1/ratings/')
            .then(function (result) {
                return result.data;
            });
        }

        // TODO: token, content, put
        function updateRating(ratingId) {
            return $http.post(apiBaseAddress + '/api/v1/ratings/' + ratingId)
            .then(function (result) {
                return result.data;
            });
        }

        // TODO: token, content
        function deleteRating(ratingId) {
            return $http.post(apiBaseAddress + '/api/v1/ratings/' + ratingId)
            .then(function (result) {
                return result.data;
            });
        }

        


    }
})();