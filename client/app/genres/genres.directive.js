(function() {
    'use strict';

    angular
        .module('NMDb')
        .directive('genres', genres);

    genres.$inject = ['$window'];
    
    function genres ($window) {
        // Usage:
        //     <genres></genres>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'templates/genres/genres.html',
            controller: 'genresCtrl as control',
            scope: {
                selectedgenres: '='
            }
        };

        return directive;

        function link(scope, element, attrs) {
        }
    }

})();