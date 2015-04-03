(function () {
    'use strict';

    angular
        .module('NMDb')
        .config(route); // Instead of configuring routes inline, refer to a function. Much neater this way.

    route.$inject = ['$routeProvider']; 

    function route($routeProvider) {

        $routeProvider.otherwise('/');

        $routeProvider
            .when('/test', {
                templateUrl: 'templates/test/test.html',
                controller: 'testCtrl as control'
            })
        .when('/', {
            templateUrl: 'templates/movies/movies.html',
            controller: 'moviesCtrl as control'
        })
        .when('/movie/:id', {
            templateUrl: 'templates/movies/movie.html',
            controller: 'movieCtrl as control'
        })
        .when('/movie/:id/reviews', {
            templateUrl: 'templates/reviews/reviews.html',
            controller: 'reviewsCtrl as control'
        })
         .when('/review/:id', {
             templateUrl: 'templates/reviews/review.html',
             controller: 'reviewCtrl as control'
         })
         .when('/movie/:id/ratings', {
             templateUrl: 'templates/ratings/ratings.html',
             controller: 'ratingsCtrl as control'
         })
        .when('/rating/:id', {
            templateUrl: 'templates/ratings/rating.html',
            controller: 'ratingCtrl as control'
        }); 
    }

})();

// You can learn about routes in:
// CodeSchool.org: Staying Sharp with Angular, level 1

// Routes are for linking user navigation to the template that presents the correct view state to the user
// and the controller that provideds the content for the view.
