'use strict';

angular.module('webApp')
  .controller('ShowCtrl', function ($rootScope, $scope, $interval, $log, Messages) {
    $rootScope.nav = 'show';
    $scope.noticeMsg = {content: '축하 메시지는 jeju.bigeye.me에서', writer: '소민♥️문범'};

    if($rootScope.isIntervalStarted === false) {
      $rootScope.data = [];
      $rootScope.msgs = [];
      $rootScope.isIntervalStarted = true;
      $interval(function() {
        var newMsgPromise = Messages.getNewMsgPromise(Messages.lastTime);
        newMsgPromise.then(function(data) {
          if (data.length > 0) {
            Messages.lastTime = data[0].created_at;
            $rootScope.msgs = data.concat([$scope.noticeMsg]).concat($rootScope.data);
            $rootScope.data = data.concat($rootScope.data);
          }
        }, function (data) {
          //error
        });
      }, 3000);
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
);
