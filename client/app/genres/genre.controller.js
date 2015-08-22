(function () {
    'use strict';

    angular
        .module('NMDb') 
        .controller('genreCtrl', genre);

    genre.$inject = ['$genreService']; 

    function genre($genreService) {
        /* jshint validthis:true */
        var ctrl = this;
        ctrl.name = '';

        activate();

        function activate() { }

    }
})();
