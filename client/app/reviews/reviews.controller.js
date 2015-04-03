(function () {

	angular.module('NMDb')
		.controller('reviewsCtrl', reviews);

	reviews.$inject = ['$routeParams', 'reviewService', 'movieService'];

	function reviews($routeParams, reviewService, movieService) {

		var ctrl = this;

		activate();

		function activate() {

		    ctrl.fuck = {
		        what: 'this shit',
		        when: 'now'
		    };

			var movieId = $routeParams.id;

		    reviewService.getReviews(movieId)
               .then(function (data) {
                   ctrl.reviews = data;
               })
               .catch(function (error) {
                   ctrl.error = error;
               });

			//reviewService.getReviews(movieId)
			//.then(function (data) {
			//    ctrl.fuck = {
			//        what: 'ME always',
			//        when: 'always'
			//    };
			//})
			//.catch(function (error) {
			//    ctrl.fuck = {
			//        what: 'me over',
			//        when: 'always'
			//    };
			//});

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


// Reviews by movieId: /api/v1/movies/:id/reviews
// Ratings by movieId: /api/v1/movies/:id/ratings

	