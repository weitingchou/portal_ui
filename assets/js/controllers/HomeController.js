'use strict';

var dependencies = ['$scope', '$modal'];

function HomeController($scope, $modal) {

  /**
   * When the user hits the Signin link
   */
  $scope.openModal = function(action) {
    if (action === 'signin') {
      $modal.open({
        templateUrl: 'views/signinModal.html',
        resolve: {
          homePage: function() { return 'home'; },
          signinPage: function() { return 'signin'; }
        },
        controller: 'AuthController'
      });
    }
  };
}

module.exports = dependencies.concat([HomeController]);
