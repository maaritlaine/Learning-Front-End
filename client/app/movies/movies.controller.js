(function () {
    'use strict';

    angular
        .module('NMDb')
        .controller('moviesCtrl', movies);

    movies.$inject = ['movieService'];

    function movies(movieService) {
        /* jshint validthis:true */
        var ctrl = this;

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
