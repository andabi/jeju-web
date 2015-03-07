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
  .controller('WriteCtrl', function ($rootScope, $scope, $log, Messages) {
    $rootScope.nav = 'write';

    $scope.send = function () {
      Messages.sendMsg($scope.writer, $scope.content);
      $log.debug("Writer: " + $scope.writer);
      $log.debug("Content: " + $scope.content);
    }
  });
