(function () {
    'use strict';

    angular
        .module('NMDb')
        .service('genreService', genreService);

    genreService.$inject = ['$http', 'loginService'];

    function genreService($http, loginService) {

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

        //$http({ method: "POST", url: '/llamas.json', data: newLlamaRecruit });

        //$httpProvider.interceptors.push(function ($q, $cookies) {
        //    return {
        //        'request': function (config) {

        //            config.headers['Token'] = $cookies.loginTokenCookie;
        //            return config;
        //        }
        //    };
        //});

        function addGenre(genre) {

            var headers = loginService.getTokenHeader();

            return $http.post(apiBaseAddress + '/api/v1/genres/' + genre, headers)
                .then(function (result) {
                    return result.data;
                });
        }

        function deleteGenre(genre) {

            var headers = loginService.getTokenHeader();

            return $http.delete(apiBaseAddress + '/api/v1/genres/' + genre.name, genre, headers)
                .then(function (result) {
                    return result.data;
                });
        }

    }
})();