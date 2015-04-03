(function () {

    'use strict';

    angular.module('NMDb')
        .controller('testCtrl', test);

    // Remember to inject all the parameters the functions take in. It is safe for minification.
    // test.$inject = ['$scope'];

    function test() {

      /* jshint validthis:true */
      var ctrl = this;
            
       ctrl.fuck = {
            what: 'this shit',
            when: 'now'
        };

    }

}
)();
