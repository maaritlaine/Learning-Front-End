(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('reviewService', reviewService);

   reviewService.$inject = ['$http', 'loginService']; 

   function reviewService($http, loginService) {

      var apiBaseAddress = 'https://nmdb.azurewebsites.net'; 

        var service = {
            getReviews: getReviews,
            getUserReviews: getUserReviews,
            getReview: getReview,
            addReview: addReview,
            updateReview: updateReview,
            deleteReview: deleteReview
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

        function getUserReviews(movieId) {

            var headers = loginService.getTokenHeader();
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

       // TODO: token, content
        function addReview(review) {

            var headers = loginService.getTokenHeader();

            return $http.post(apiBaseAddress + '/api/v1/reviews', review, headers)
            .then(function (result) {
                return result.data;
            });

        }

       // TODO: token, content
        function updateReview(review) {

            var headers = loginService.getTokenHeader();

            return $http.put(apiBaseAddress + '/api/v1/reviews/' + review.id, review, headers)
            .then(function (result) {
                return result.data;
            });

        }

       // TODO: token, content
        function deleteReview(reviewId) {
            return $http.delete(apiBaseAddress + '/api/v1/reviews/' + reviewId)
            .then(function (result) {
                return result.data;
            });
        }

    }
})();

// Reviews by movieId: /api/v1/movies/:id/reviews
// Ratings by movieId: /api/v1/movies/:id/ratings