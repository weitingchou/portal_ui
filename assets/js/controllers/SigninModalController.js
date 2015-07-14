'use strict';

var dependencies = ['$scope', '$modal'];

function SigninModalController($scope, $modal) {

  /**
   * When the user hits the Signin link
   */
  $modal.open({
    templateUrl: 'views/signup-fb.html',
    controller: 'AuthController'
  });
}

module.exports = dependencies.concat([SigninModalController]);
