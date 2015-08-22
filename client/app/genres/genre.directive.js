(function() {
    'use strict';

    angular
        .module('NMDb')
        .directive('genre', genre);

    genre.$inject = ['$window'];
    
    function genre ($window) {
        // Usage:
        //     <genre></genre>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E'
        };

        return directive;

        function link(scope, element, attrs) {
        }
    }

})();