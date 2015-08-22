(function () {
    'use strict';

    angular
        .module('NMDb')
        .factory('movieService', movieService); //TODO: why factory, other possibilities?

    movieService.$inject = ['$http', 'loginService'];

    function movieService($http, loginService) {

    	var apiBaseAddress = 'https://nmdb.azurewebsites.net'; //TODO: configuration file

    	var service = {
    		getMovies: getMovies,
    		getMovie: getMovie,
    		addMovie: addMovie,
    		updateMovie: updateMovie,
    		deleteMovie: deleteMovie
                
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

        // TODO: token, content
    	function addMovie(movie) {

    	    var headers = loginService.getTokenHeader();

    	    return $http.post(apiBaseAddress + '/api/v1/movies/', movie, headers)
            .then(function (result) {
                return result.data;
            });
    	}

        // TODO: token, content
    	function updateMovie(movie) {

    	    var headers = loginService.getTokenHeader();

    	    return $http.put(apiBaseAddress + '/api/v1/movies/' + movie.id, movie, headers)
            .then(function (result) {
                return result.data;
            });
    	}

        // TODO: token, content
    	function deleteMovie(movie) {

    	    var headers = loginService.getTokenHeader();
    	    
    	    return $http.delete(apiBaseAddress + '/api/v1/movies/' + movie.id, movie, headers)
            .then(function (result) {
                return result.data;
            });
    	}


    }
})();

// Services are for business logic. Call your back-end from here.
// Create your service with the factory method or use ????
// Inject all the parameters your functions are going to need into the service.
// Expose your functions in an array.