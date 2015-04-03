(function () {

    'use strict';

    angular.module('NMDb')
        .controller('reviewCtrl', review);

    // Remember to inject all the parameters the functions take in. It is safe for minification.
    review.$inject = ['$routeParams', 'reviewService'];

    function review($routeParams, reviewService) {

        /* jshint validthis:true */
        var ctrl = this;

        var reviewId = $routeParams.id;

        ctrl.fuck = {
            what: 'this shit r: ' + reviewId,
            when: 'now'
        };

        reviewService.getReview(reviewId)
               .then(function (data) {
                   ctrl.review = data;
               })
               .catch(function (error) {
                   ctrl.error = error;
               });

    }

}
)();


//(function () {

//    angular.module('NMDb')
//        .controller('reviewCtrl', 'review');
    
//    review.$inject = ['$routeParams'];

//    function review($routeParams) {

//        var reviewId = $routeParams.id;

//        var ctrl = this;

//        activate();

//        function activate() {

//            ctrl.fuck = {
//                what: 'this review.html shit: ' + reviewId,
//                when: 'now'
//            };
//            return ctrl;

//        }
        

//    }

//})();

// Review by id: /api/v1/reviews/:id

// $routeParams contain the parameters provided in the route. 
// For example, route /api/v1/reviews/:id has one parameter: id.
// Parameters are marked with a colon.
