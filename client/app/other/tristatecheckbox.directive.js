(function () {
    'use strict';

    angular
        .module('NMDb')
        .directive('tristatecheckbox', tristatecheckbox);


    function tristatecheckbox() {
        // Usage:
        //     <tristatecheckbox></tristatecheckbox>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            controller: 'tristatecheckboxCtrl as control',
            scope: {
                checkboxes: '='
            },
            templateUrl: 'templates/other/tristatecheckbox.html'
            
            
        };

        return directive;

        function link(scope, element, attrs) {
        }
    }

})();