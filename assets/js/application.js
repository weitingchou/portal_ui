
// Require necessary libraries
//require('./lib/jquery/jquery.js');
//require('./lib/angular/angular.js');
//require('./lib/angular-cookies/angular-cookies.js');
//require('./lib/angular-resource/angular-resource.js');
//require('./lib/angular-route/angular-route.js');
//require('./lib/angular-bootstrap/ui-bootstrap-tpls.js');
// Require the rest of the UI code
//require('./models.js');
//require('./services.js');
//require('./resources.js');
//require('./controllers.js');

// Declare app level moduel which depends on filters, and services
var moduleDependencies = [
  'ngRoute',
//  'ngResource',
//  'ngCookies',
  'ui.bootstrap',
  'ui.router'
];

var heliosModule = angular.module('heliosModule', moduleDependencies);

heliosModule.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'modalContainer',
        controller: 'SigninModalController'
      })
      .state('otherwise', {
        url: '*path',
        templateUrl: 'views/404',
        controller: 'Error404Controller'
      });
  }
]);

heliosModule.factory('Authentication', [
  function() {
    this.user = window.user;
    return {
      user: this.user
    };
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['heliosModule']);
});

