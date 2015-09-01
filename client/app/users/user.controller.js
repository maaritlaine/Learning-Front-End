(function () {
    'use strict';

    angular
        .module('NMDb')
        .controller('userCtrl', user);

    user.$inject = ['userService', '$cookieStore'];

    function user(userService, $cookieStore) {

        /* jshint validthis:true */
        var ctrl = this;


        // username
        // email
        // password

        activate();

        function activate() {
            console.log('Activate user registration from.');
        }

        ctrl.register = function () {

            ctrl.user.username = ctrl.user.email;

            console.log('Register user. ' + ctrl.user.username);
            userService.addUser(ctrl.user);

        };
    }

})();
