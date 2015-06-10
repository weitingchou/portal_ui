'use strict';

// Require necessary libraries
require('./lib/jquery/jquery.js');
require('./lib/angular/angular.js');
require('./lib/angular-cookies/angular-cookies.js');
require('./lib/angular-resource/angular-resource.js');
require('./lib/angular-route/angular-route.js');
require('./lib/angular-bootstrap/ui-bootstrap-tpls.js');
// Require the rest of the UI code
require('./models.js');
require('./services.js');
require('./resources.js');
require('./controllers.js');

// Declare app level moduel which depends on filters, and services
var moduleDependencies = [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'ui.bootstrap',

];

var heliosModule = angular.module('heliosModule', moduleDependencies);

heliosModule.config(['$routeProvider', '$httProvider']);
