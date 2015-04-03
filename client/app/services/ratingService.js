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
            getRating: getRating
        };

        return service;

        function getRatings(movieId) {
            return $http.get(apiBaseAddress + '/api/v1/movies/' + movieId + '/ratings')
            .then(function (result) {
                return result.data;
            })
        }

        function getRating(ratingId) {
            return $http.get(apiBaseAddress + '/api/v1/ratings/' + ratingId)
            .then(function (result) {
                return result.data;
            })
        }


    }
})();