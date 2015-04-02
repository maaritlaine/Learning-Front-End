(function () {
    'use strict';

    angular
        .module('NMDb')
        .factory('movieService', movieService); //TODO: why factory, other possibilities, see code school

    movieService.$inject = ['$http'];

    function movieService($http) {

    	var apiBaseAddress = 'https://nmdb.azurewebsites.net'; //TODO: configuration file

    	var service = {
    		getMovies: getMovies,
    		getMovie: getMovie
    	};

    	return service;

    	function getMovies() {
    		return $http.get(apiBaseAddress + '/api/v1/movies')
                .then(function (result) {
                	return result.data;
                });
    	}

    	function getMovie(movieId) {
    		return $http.get(apiBaseAddress + '/api/v1/movies/' + movieId)
                .then(function (result) {
                	return result.data;
                });
    	}
    }
})();