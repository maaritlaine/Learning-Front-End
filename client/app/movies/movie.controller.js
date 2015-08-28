(function () {

    'use strict';

    angular
        .module('NMDb')
        .controller('movieCtrl', movie);

    movie.$inject = ['$routeParams', 'movieService'];
    // $routeParams is for routing contains all the parameters from the URL (cf. movieId).
    // Consult the API reference for parameters available.

    function movie($routeParams, movieService) {

        /* jshint validthis:true */
        var ctrl = this;
        ctrl.submit = submit;

        // title
        // releaseYear
        // storyline
        // genres


        activate(); 

        /* TODO: Calculate and return average rating. */

        function activate() {

            var movieId = $routeParams.id;

            // Data is returned by the getMovies-function and then passed on to handling.
            // .then handles the returned data, .catch catches an error.
            movieService.getMovie(movieId)
            .then(function (data) {
                ctrl.movie = data;
            })
            .catch(function (error) {
                ctrl.error = error;
                //console.log(error); // TODO: what is this console that it is logging into??
                //alert('Error, sorry!');
            });

        }
    }

    function submit() {
        console.log('Submit movie.');
    }

})();

// You create a controller in the NMDb application by attaching it to the main module (.controller).
// The controller is bound to the html template by using ng-controller directive or via routing.
// The controller is responsible for creating the $scope then used to present data in the view.
// The $scope is passed empty into the controller which passes it back filled with all the cool 
// things for the view. Or you use routing and not $scope. :)
