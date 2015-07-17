'use strict';

var dependencies = ['$scope', '$rootScope', '$modalInstance', '$state', '$http', '$window', 'Session'];

function AuthController($scope, $rootScope, $modalInstance, $state, $http, $window, Session) {

  $rootScope.$on('session-change', function() {
    console.log('[AuthController] caught session change event');
  });
  $scope.$on('$stateChangeSuccess', function() {
    console.log('[AuthController] caught state change event, current state: '+$state.current.name);
    if ($state.current.name != 'signin') {
      $modalInstance.dismiss('cancel');
      $state.$go('home');
    }
  });

  $scope.view = {
    failureMessage: ''
  };

  /**
   * When the user hits the signin link
   */
  $scope.signin = function(provider) {
    if (provider === 'local') {
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
      Session.signin(provider);
      /*
      $http.get('/auth/'+provider+'/')
      .success(function(data, status, headers, config) {
        $window.location = '/';
      })
      .error(function(data, status, headers, config) {
        $scope.view.failureMessage = 'Failed to register user, error: '+data;
      });
      */
    }
  };
}

module.exports = dependencies.concat([AuthController]);
