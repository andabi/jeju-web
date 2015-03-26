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
            Messeges.getNewMsg(function(response) {
                $scope.newdata=response;
            });
            var newdata = $scope.newdata; //Messages.getNewMsg();
            console.log("-------newdata");
            console.log(newdata.length);
            console.log("-------");
            newdata = newdata.concat($scope.data);
            console.log("-->"+newdata.length);
            $scope.data = newdata;
            }, 5000);
        $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
        ];
        }
);
