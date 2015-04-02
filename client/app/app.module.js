(function () {
    'use strict';
    angular.module('NMDb', [
        // Angular modules
        'ngRoute']);
})();


//(function () {

//    angular.module('app', [

//    /* Angular modules needed by the application: ngRoute for routing */
//    'ngRoute',

//    /* Custom modules needed by the application: */

//    /* Third party modules needed by the application: pascalprecht.translate for translations */
//    'pascalprecht.translate'

//    ]);

//})();

// TODO: explain why function. Did it have something to do with stuff being loaded early enough
// so that the bindnig actually happens? Or was it just saving resources.

// This is kind of the starting point of an angular application. 
// Every projecct needs the main module. Big projects can also contain other modules, but for smaller ones this is enough.

// TODO: What is an angular module?
// TODO: is ng-app a direcitve?

// Basically you tell the module function the name of the application and pass it an array of modules you are going 
// to need in your application. //TODO: what is the stuff called?
// The name of the application must be the same one you specify in the ng-app directive on index.html
// Like this: <html ng-app="NMDb">



//TODO: tee tästä funktio



//(function () {
//    'use strict';

//    angular.module('NMDb', [

//         Angular modules 
//        'ngAnimate',
//        'ngRoute', /* For routing, i.e. guiding the navigation within an SPA. */
//        'pascalprecht.translate' /* For translations. */

//         Custom modules 

//         3rd Party Modules
        
//    ]);

//})();