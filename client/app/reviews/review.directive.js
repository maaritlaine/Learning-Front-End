(function() {
    'use strict';

    angular
        .module('NMDb')
        .directive('review', review);

    review.$inject = ['$window'];
    
    function review ($window) {
        // Usage:
        //     <review></review>
        // Creates:
        // 
        var directive = {
            link: link,
            templateUrl: 'templates/reviews/review.html',
            restrict: 'E',
            scope: {
                review: "=review"
            }
        };
        return directive;   

        function link(scope, element, attrs) {
        }
    }

})();