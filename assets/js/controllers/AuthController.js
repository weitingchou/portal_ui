'use strict';

var dependencies = ['$scope', '$http', '$window'];

function localLogin() {
}

function thirdPartyLogin() {

}

function AuthController($scope, $http, $window) {

  $scope.view = {
    failureMessage: ''
  };

  /**
   * When the user hits the submit button
   */
  $scope.submit = function(loginProvider) {
    if (loginProvider === 'local') {
      if ($scope.password !== $scope.passwordConfirm) {
        $scope.view.failureMessage = 'Password doesn\'t match';
      } else {
        $http.post('/auth/local/', {
          username: $scope.username,
          email: $scope.email,
          password: $scope.password
        })
        .success(function(data, status, headers, config) {
          console.log('data: %s, status: %s, headers: %s, config: %s', JSON.parse(data), status, headers, config);
          //$location.url('http://'+$location.host()+':'+$location.port());
          $window.location = '/';
        })
        .error(function(data, status, headers, config) {
          console.log('data: %s, status: %s, headers: %s, config: %s', JSON.parse(data), status, headers, config);
          $scope.view.failureMessage = 'Failed to register user, error: '+data;
        });
      }
    } else {
      $http.get('/auth/'+loginProvider+'/')
      .success(function(data, status, headers, config) {
        $window.location = '/';
      })
      .error(function(data, status, headers, config) {
        $scope.view.failureMessage = 'Failed to register user, error: '+data;
      });
    }
  };
}

module.exports = dependencies.concat([AuthController]);
