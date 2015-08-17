(function() {
    'use strict';

    angular
        .module('NMDb')
        .directive('rating', rating);

    rating.$inject = ['$window'];
    
    function rating($window) {
        // Usage:
        //     <review></review>
        // Creates:
        // 
        var directive = {
            link: link,
            templateUrl: 'templates/ratings/rating.html',
            restrict: 'E',
            scope: {
            }
        };
        return directive;   

        function link(scope, element, attrs) {
        }
    }

})();