(function () {

    'use strict';

    angular
        .module('NMDb')
        .controller('movieCtrl', movie);

    movie.$inject = ['$routeParams', 'movieService'];

    // $routeParams is for routing. Sen mukana saadaan movieId TODO: learn about routing

    function movie($routeParams, movieService) {

        /* jshint validthis:true */
        var controller = this; 
        activate(); 

        function activate() {

            var movieId = $routeParams.id;

            controller.tunnus = movieId;
            // Data is returned by the getMovies-function and then passed on to handling.
            // .then handles the returned data, .catch catches if there is and error returned?
            // TODO: learn about error handling and possible functionalities after a service call
            movieService.getMovie(movieId)
            .then(function (data) {
                controller.movie = data;
            })
            .catch(function (error) {
                controller.error = error + ' FUCK THIS SHIT MOVIE.';
                //console.log(error); // TODO: what is this console that it is logging into
                //alert('Fuck this shit!');
            });

        }
    }

    // Attaching a movies collection into $scope. The collection is json.


    //TODO: use a service to fetch the movies from the back-end

})();
//TODO: make this into function
// Creating a controller in the NMDb application declared in the main module.
// The contoroller is bound to the html template by using ng-controller directive.
// The controller is responsible for creating the $scope then used to present data in the view.
// The $scope is passed empty into the controller which passes it back filled with all the cool things for the view.
