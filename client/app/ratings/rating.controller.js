(function () {
    'use strict';

    angular
        .module('NMDb')
        .controller('ratingCtrl', rating);

    rating.$inject = ['$routeParams', 'ratingService'];

    function rating($routeParams, ratingService) {

        /* jshint validthis:true */
        var ctrl = this;
        var ratingId = $routeParams.id;

        activate();

        function activate() {

            ratingService.getRating(ratingId)
            .then(function (data){
                ctrl.rating = data;
            })
            .catch(function (error){
                console.log(error);
                alert('Epic fail.');
            });

        }
    }
})();
