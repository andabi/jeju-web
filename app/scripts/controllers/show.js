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
      var newdata = Messages.getNewMsg();
      $scope.data = Messages.getNewMsg().concat($scope.data);
      console.log($scope.data);
    }, 5000);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
);
