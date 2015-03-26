/**
 * Created by andabi on 15. 3. 1..
 */
'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the webApp
 */
angular.module('webApp')
.controller('ShowCtrl', function ($rootScope, $scope, $interval, $log, Messages) {
  $rootScope.nav = 'show';
  $scope.setup = function () {
    $scope.data = [];
    $interval(function() {
      var newMsgPromise = Messages.getNewMsgPromise($scope.lastTime);
      newMsgPromise.then(function(data) {
        if (data.length > 0) {
          $scope.data = data.concat($scope.data);
          $scope.lastTime = data[0].created_at;
        }
      }, function (data) {
        //error
      });
    }, 5000);

  };
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  }
);
