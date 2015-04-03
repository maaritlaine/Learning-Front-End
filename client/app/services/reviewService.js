(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('reviewService', reviewService);

   reviewService.$inject = ['$http']; 

   function reviewService($http) {

      var apiBaseAddress = 'https://nmdb.azurewebsites.net'; 

        var service = {
            getReviews: getReviews,
            getReview: getReview
        };

        return service;

        // The methods use the $http-service to GET json from the API url.
        // The call results in a PROMISE. You access the result either through success method and  
        // variable containing the data of the result or then method and variable containing 
        // response of the result.
        function getReviews(movieId) {

            return $http.get(apiBaseAddress + '/api/v1/movies/' + movieId + '/reviews')
                 .then(function (result) {
                     return result.data;
                 });
        }

        function getReview(reviewId) {

            return $http.get(apiBaseAddress + '/api/v1/reviews/' + reviewId)
            .then(function (result) {
                return result.data;
            });
        }

    }
})();

// Reviews by movieId: /api/v1/movies/:id/reviews
// Ratings by movieId: /api/v1/movies/:id/ratings