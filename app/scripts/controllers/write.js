'use strict';

angular.module('webApp')
  .controller('WriteCtrl', function ($rootScope, $scope, $window, $log, $location, Messages) {
    $rootScope.nav = 'write';

    $scope.send = function () {
      Messages.sendMsg($scope.writer, $scope.content, function () {
        $window.alert("축하 메시지를 잘 보냈어요!");
        $location.path('/show').replace();
      }, function () {
        //$window.alert("메시지를 보내지 못했습니다.");
      });
    }
  });
