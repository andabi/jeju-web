'use strict';

angular.module('webApp')
  .controller('WriteCtrl', function ($rootScope, $scope, $log, Messages) {
    $rootScope.nav = 'write';

    $scope.send = function () {
      Messages.sendMsg($scope.writer, $scope.content);
      $log.debug("Writer: " + $scope.writer);
      $log.debug("Content: " + $scope.content);
    }
  });
