(function () {
    'use strict';

    angular
        .module('NMDb') 
        .controller('genresCtrl', genres);

    genres.$inject = ['$window', 'genreService']; 

    function genres($window, genreService) {
        /* jshint validthis:true */
        var ctrl = this;
        ctrl.genres = [];

        ctrl.addGenre = function () {
            $window.location.href = $window.location.href + 'addgenre';
        };


        activate();

        function activate() {

            genreService.getGenres()
              .then(function (data) {
                  for (var item in data) 
                  {
                      ctrl.genres.push(data[item].name);
                  }
              })
              .catch(function (error) {
                  ctrl.error = error;
              });   
        }
    }
})();
