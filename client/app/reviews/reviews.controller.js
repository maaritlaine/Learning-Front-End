// Reviews by movieId: /api/v1/movies/:id/reviews
// Ratings by movieId: /api/v1/movies/:id/ratings
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

			//reviewService.getReviewsToo(movieId)
			//.then(function (data) {
			//	controller.otherdata = data;
			//})
			//.catch(function (error) {
			//	controller.otherdata = error;
			//});

		}

		
	}


})();




	