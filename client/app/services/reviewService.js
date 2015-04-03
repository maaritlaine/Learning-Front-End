(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('reviewService', reviewService);

    reviewService.$inject = ['$http'];

    function reviewService($http) {

        var apiBaseAddress = 'https://nmdb.azurewebsites.net'; //TODO: configuration file

        // Palvelun julkiset metodit palautetaan kutsujalle
        var service =
            {
                getReviews: getReviews
                //getReviewsToo: getReviewsToo
               // getReview: getReview
            };

        return service;

        // The methods use the $http-service to GET json from the API url.
        // The call results in a PROMISE. You access the result either through success method and  
        // variable containing the data of the result or then method and variable containing 
        // response of the result.
        function getReviews(movieId) {

            $http.get(apiBaseAddress + '/api/v1/movies/' + movieId + '/reviews')
            .then(function (result) {
                return result.data;
            });
        }

        //function getReviewsToo(movieId) {

        //    $http.get(apiBaseAddress + '/api/v1/movies/' + movieId + '/reviews')
        //    .success(function (data) {
        //        return data;
        //    })
        //    .error(function (error) {
        //        return error;
        //    });
        //}

        //function getReview(reviewId) {
        //    $http.get(apiBaseAddress + '/api/v1/reviews/' + reviewId)
        //    .then()
        //    .error();
        //}

    }
})();
// Reviews by movieId: /api/v1/movies/:id/reviews
// Ratings by movieId: /api/v1/movies/:id/ratings