(function () {
    'use strict';
    angular.module('NMDb', [
        // Angular modules
        'ngRoute', 'pascalprecht.translate', 'ngCookies']);
})();

// This is the main module. This is the starting point of an angular application. 
// Every projecct needs to have at least this one module. 
// Big projects can also contain other modules, but for smaller ones this is enough.

// Better to have a function than to declare an app variable in this or other modules and files. 

// Name declared in this module (NMDb) must correspond to the name you specify in the ng-app directive on index.html
// Like this: <html ng-app="NMDb">

// In addition to giving the name for your application, this is where you pass an array of other modules 
// your application needs.




