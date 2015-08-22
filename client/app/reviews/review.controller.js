(function () {

    'use strict';

    angular.module('NMDb')
        .controller('reviewCtrl', review);

    // Remember to inject all the parameters the functions take in. It is safe for minification.
    review.$inject = ['$routeParams', '$window', 'reviewService'];

    

    // title
    // reviewText
    // movieId

    // TODO: onko tää ongelmallista
    function review($routeParams, $window, reviewService) {

        console.log('loca ' + $window.location.href);

        /* jshint validthis:true */
        var ctrl = this;
        
        var reviewId = $routeParams.id;

        reviewService.getReview(reviewId)
               .then(function (data) {
                   console.log('reviewCtrl ' + data);
                   ctrl.review = data;
               })
               .catch(function (error) {
                   ctrl.error = error;
               });
    
        ctrl.submit = function () {

            console.log('Submit review. ' + ctrl.review.id);

            if (ctrl.review.id === '') {
                console.log('ADD review.');
                // reviewService.addReview(ctrl);
            } else {
                console.log('UPDATE review.');
                reviewService.updateReview(ctrl.review);
            }
        };
        
        ctrl.edit =  function () {
            $window.location.href = $window.location.href + 'editreview';
        };

        



    }



}
)();

// Review by id: /api/v1/reviews/:id

// $routeParams contain the parameters provided in the route. 
// For example, route /api/v1/reviews/:id has one parameter: id.
// Parameters are marked with a colon.
