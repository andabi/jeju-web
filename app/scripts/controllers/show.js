'use strict';

angular.module('webApp')
  .controller('ShowCtrl', function ($rootScope, $scope, $interval, $log, Messages) {
    $rootScope.nav = 'show';

    if($rootScope.isIntervalStarted === false) {
      $rootScope.data = [];
      $rootScope.isIntervalStarted = true;
      $interval(function() {
        var newMsgPromise = Messages.getNewMsgPromise(Messages.lastTime);
        newMsgPromise.then(function(data) {
          if (data.length > 0) {
            $rootScope.data = data.concat($rootScope.data);
            Messages.lastTime = data[0].created_at;
          }
        }, function (data) {
          //error
        });
      }, 5000);
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
);
