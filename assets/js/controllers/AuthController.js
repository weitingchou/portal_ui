'use strict';

var dependencies = ['$scope', '$http', '$location'];

function AuthController($scope, $http, $location) {

  $scope.view = {
    failureMessage: ''
  };

  /**
   * When the user hits the submit button
   */
  $scope.submit = function() {

    if ($scope.password !== $scope.passwordConfirm) {
      $scope.view.failureMessage = 'Password doesn\'t match';
    } else {
      $http.post('/auth/local/register', {
          username: $scope.username,
          email: $scope.email,
          password: $scope.password
        })
        .success(function(data, status, headers, config) {
          console.log('data: %s, status: %s, headers: %s, config: %s', JSON.parse(data), status, headers, config);
          //$location.url('http://'+$location.host()+':'+$location.port());
        })
        .error(function(data, status, headers, config) {
          console.log('data: %s, status: %s, headers: %s, config: %s', JSON.parse(data), status, headers, config);
          $scope.view.failureMessage = 'Failed to register user, error: '+data;
        });
    }

  };
}

module.exports = dependencies.concat([AuthController]);
