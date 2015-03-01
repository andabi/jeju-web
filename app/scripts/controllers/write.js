/**
 * Created by andabi on 15. 3. 1..
 */
'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:WriteCtrl
 * @description
 * # WriteCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('WriteCtrl', function ($scope, $log, Messages) {
    Messages.sendMsg($scope.writer, $scope.content);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
