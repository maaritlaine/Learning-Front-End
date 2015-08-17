(function() {
    'use strict';

    angular
        .module('NMDb')
        .directive('reviews', reviews);

    reviews.$inject = ['$window', 'reviewService'];
    
    function reviews($window, reviewService) {
        // Usage:
        //     <reviews></reviews>
        // Creates:
        // 
        var directive = {
            link: link,
            templateUrl: 'templates/reviews/reviews.html',
            restrict: 'E',
            scope:{
                movieId: "=movieId",
            },
            controller: 'reviewsCtrl as control'
        };
        return directive;

        function link(scope, element, attrs) {

            console.debug("movie id :" + scope.movieId);

            //reviewService.getReviews(movieId)
            //   .then(function (data) {
            //       allreviews = data;
            //   })
            //   .catch(function (error) {
            //       ctrl.error = error;
            //   });

        }
    }

})();