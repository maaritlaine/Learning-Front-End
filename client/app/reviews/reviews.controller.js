(function () {

	angular.module('NMDb')
		.controller('reviewsCtrl', reviews);

	reviews.$inject = ['$routeParams', 'reviewService'];

	function reviews($routeParams, reviewService) {

		var ctrl = this;

		activate();

		function activate() {

			var movieId = $routeParams.id;

		    reviewService.getReviews(movieId)
               .then(function (data) {
                   ctrl.reviews = data;
               })
               .catch(function (error) {
                   ctrl.error = error;
               });
		}
	}


})();

// Reviews by movieId: /api/v1/movies/:id/reviews
// Ratings by movieId: /api/v1/movies/:id/ratings

	