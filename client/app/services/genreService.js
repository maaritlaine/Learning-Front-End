(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('genreService', genreService);

    genreService.$inject = ['$http'];

    function genreService($http) {

        var apiBaseAddress = 'https://nmdb.azurewebsites.net'; //TODO: configuration file

        var service = {
            getGenres: getGenres,
            addGenre: addGenre,
            deleteGenre: deleteGenre
        };

        return service;

        function getGenres() {
            return $http.get(apiBaseAddress + '/api/v1/genres')
                .then(function (result) {
                    return result.data;
                });
        }

        //TODO: use token, parameters, put
        function addGenre(genreName) {
            return $http.get(apiBaseAddress + '/api/v1/genres/' + genreName)
                .then(function (result) {
                    return result.data;
                });
        }

        // TODO: token
        function deleteGenre(genreName) {
            return $http.delete(apiBaseAddress + '/api/v1/genres/' + genreName)
                .then(function (result) {
                    return result.data;
                });
        }

    }
})();