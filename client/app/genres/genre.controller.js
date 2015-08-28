(function () {
    'use strict';

    angular
        .module('NMDb') 
        .controller('genreCtrl', genre);

    genre.$inject = ['genreService']; 

    function genre(genreService) {
        /* jshint validthis:true */
        var ctrl = this;
        ctrl.isSelected = true;

        ctrl.submit = function () {

            console.log('Submit genre. ' + ctrl.genre.name);

            if (ctrl.genre.id === '') {
                console.log('ADD genre.');
                genreService.addGenre(ctrl);
            }

            //} else {
            //    console.log('UPDATE review.');
            //    reviewService.updateReview(ctrl.review);
            //}
        };

        activate();

        function activate() { }

    }
})();
