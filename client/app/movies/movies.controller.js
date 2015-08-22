(function () {
    'use strict';

    angular
        .module('NMDb')
        .controller('moviesCtrl', movies);

    movies.$inject = ['movieService', '$window'];

    function movies(movieService, $window) {
        /* jshint validthis:true */
        var ctrl = this;

        ctrl.addMovie = function ()
        { 
            $window.location.href = $window.location.href + 'addmovie';
        };

        activate();

        function activate() {

            movieService.getMovies()
                .then(function (data) {
                    ctrl.movies = data;
                })
                .catch(function (error) {
                    ctrl.error = error;
                });
       
        }

    }


   

})();
