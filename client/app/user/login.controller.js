(function () {
    'use strict';

    angular
        .module('NMDb')
        .controller('loginCtrl', login);

    login.$inject = ['loginService', '$cookieStore'];

    function login(loginService, $cookieStore) {

        /* jshint validthis:true */
        var ctrl = this;
        // TODO: poista kovakoodaus
        ctrl.username = 'hml@testing.com';
        ctrl.password = '!23Abc';
        
    
        ctrl.signin = function () {

            //TODO: validate, hae arvot 
            loginService.oauth(ctrl.username, ctrl.password)
                     .then(function (response) {
                         ctrl.token = response.data;
                         $cookieStore.put('SESSION_TOKEN', response.data.access_token);
                         console.log('Login controller succesful. Token: ' + $cookieStore.get('SESSION_TOKEN'));
                     })
                     .catch(function (error) {
                         console.log('Login controller error.');
                     });

        };
    }

})();
