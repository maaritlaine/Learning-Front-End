(function () {
    'use strict';

    angular
        .module('NMDb')
        .directive('login', login);

    login.$inject = ['$window'];

    function login($window) {
        // Usage:
        //     <login></login>
        // Creates:
        // 
        var directive = {
            link: link,
            templateUrl: 'templates/users/login.html',
            restrict: 'E',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();