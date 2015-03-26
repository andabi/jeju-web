'use strict';

angular.module('webApp')
  .controller('WriteCtrl', function ($rootScope, $scope, $window, $log, Messages) {
    $rootScope.nav = 'write';

    $scope.send = function () {
      alert("Complete!");
      Messages.sendMsg($scope.writer, $scope.content);
      $log.debug("Writer: " + $scope.writer);
      $log.debug("Content: " + $scope.content);
      $window.location.href = '/show';
    }
  });
