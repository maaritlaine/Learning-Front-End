(function () {
    'use strict';

    angular
        .module('NMDb')
        .controller('ratingsCtrl', ratings);

    ratings.$inject = ['$routeParams', 'ratingService'];

    function ratings($routeParams, ratingService) {

        /* jshint validthis:true */
        var ctrl = this;
        var movieId = $routeParams.id;

        activate();

        function activate() {

            ratingService.getRatings(movieId)
            .then(function (data){
                ctrl.ratings = {
                    all: data,
                    avg: 10
                    };
            })
            .catch(function (error){
                console.log(error);
                alert('Epic fail.');
            });

        }
    }
})();

// Refactor rating: http://stackoverflow.com/questions/25186243/calculate-average-from-list-of-values-in-json
