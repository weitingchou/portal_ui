
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
//  'ui.bootstrap',
  'ui.router'
];

var heliosModule = angular.module('heliosModule', moduleDependencies);

heliosModule.config(['$stateProvider', '$httpProvider',
  function($stateProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('/signup', {
        templateUrl: 'views/signup-fb.html',
        controller: 'AuthController'
      })
      .state('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'AuthController'
      })
      .otherwise({
        redirectTo: '/'
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

