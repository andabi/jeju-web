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
  $scope.data = [];
  $interval(function() {
    var lastTime = new Date().toISOString();
    var newMsgPromise = Messages.getNewMsgPromise(lastTime);
    newMsgPromise.then(function(data) {
      if (data.length > 0) {
        $scope.data = $scope.data.concat(data)
      }
    }, function (data) {
      //error
    });
  }, 5000);
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  }
);
