(function () {

    'use strict';

    angular
        .module('NMDb')
        .controller('movieformCtrl', movieform);

    movieform.$inject = ['$routeParams', 'movieService'];
    // $routeParams is for routing contains all the parameters from the URL (cf. movieId).
    // Consult the API reference for parameters available.

    function movieform($routeParams, movieService) {

        // title
        // releaseYear
        // storyline
        // genres


        /* jshint validthis:true */
        var ctrl = this;

        ctrl.addMovie = function () {
            console.log('Add movie! Call service! ' + ctrl.title);

            movieService.addMovie(ctrl)
            .then(function (data) {
                ctrl.movie = data;
            })
            .catch(function (error) {
                ctrl.error = error;
                //console.log(error); // TODO: what is this console that it is logging into??
                //alert('Error, sorry!');
            });
        };
        
    }


})();

// You create a controller in the NMDb application by attaching it to the main module (.controller).
// The controller is bound to the html template by using ng-controller directive or via routing.
// The controller is responsible for creating the $scope then used to present data in the view.
// The $scope is passed empty into the controller which passes it back filled with all the cool 
// things for the view. Or you use routing and not $scope. :)
