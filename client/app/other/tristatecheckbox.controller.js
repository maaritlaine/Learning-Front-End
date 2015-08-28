(function () {
    'use strict';

    angular
        .module('NMDb')
        .controller('tristatecheckboxCtrl', tristatecheckbox);

    tristatecheckbox.$inject = ['$scope', '$element'];

    function tristatecheckbox($scope, $element) {

        $scope.masterChange = function () {
            console.log('masterChange');
        if($scope.master) {
            angular.forEach($scope.checkboxes, function(cb, index){
                cb.isSelected = true;
            });
        } else {
            angular.forEach($scope.checkboxes, function(cb, index){
                cb.isSelected = false;
            });
        }
    };

        $scope.$watch('checkboxes', function () {
            console.log('watch');
        var allSet = true, allClear = true;
        angular.forEach($scope.checkboxes, function(cb, index){
            if(cb.isSelected) {
                allClear = false;
            } else {
                allSet = false;
            }
        });
        if(allSet)        { 
            $scope.master = true; 
            $element.prop('indeterminate', false);
        }
        else if(allClear) { 
            $scope.master = false; 
            $element.prop('indeterminate', false);
        }
        else { 
            $scope.master = false;
            $element.prop('indeterminate', true);
        }
    }, true);
}

    

})();