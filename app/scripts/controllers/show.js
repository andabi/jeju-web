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
  .controller('ShowCtrl', function ($rootScope, $scope, $log, Messages) {
    $rootScope.nav = 'show';
    $scope.data = Messages.getAllMsgFromID();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
);
