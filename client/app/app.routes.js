(function () {
    'use strict';

    angular
        .module('NMDb')
        .config(route); // Instead of configuring routes here, refer to a function. Much neater this way.

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
         });
    }

})();

   

// You can learn about routes in:
// CodeSchool.org: Staying Sharp with Angular, level 1

// Plan: 
// - Movies list
// - A movie
// - Registration form

