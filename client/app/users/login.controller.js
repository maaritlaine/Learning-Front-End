(function () {
    'use strict';

    angular
        .module('NMDb')
        .controller('loginCtrl', login);

    login.$inject = ['loginService', '$cookieStore'];

    function login(loginService,  $cookieStore) {

        /* jshint validthis:true */
        var ctrl = this;

        // TODO: poista kovakoodaus. Toimii normaalisti, kun tän ottaa pois.
        //ctrl.user = {
        //    username : 'hml@testing.com',
        //    password : '!23Abc'
        //}; 
        
        ctrl.isValid = function () {
            return $cookieStore.get('SESSION_TOKEN');
        };

        ctrl.signIn = function () {

            //TODO: validate, hae arvot 
            loginService.getToken(ctrl.user.username, ctrl.user.password)
                     .then(function (response) {
                         ctrl.token = response.data;
                         $cookieStore.put('SESSION_TOKEN', response.data.access_token);
                         console.log('Login controller succesful. Token: ' + $cookieStore.get('SESSION_TOKEN'));
                     })
                     .catch(function (error) {
                         console.log('Login controller error.');
                     });

        };

        ctrl.signOut = function () {
            // TODO: onko näin simppeli ok?
            $cookieStore.put('SESSION_TOKEN', '');
        };

      
    }

})();
