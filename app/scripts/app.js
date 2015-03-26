'use strict';

angular
  .module('webApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/write.html',
        controller: 'WriteCtrl'
      })
      .when('/write', {
        templateUrl: 'views/write.html',
        controller: 'WriteCtrl'
      })
      .when('/show', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'};
    $httpProvider.defaults.headers.get = {'Content-Type': 'application/x-www-form-urlencoded'};
    $httpProvider.defaults.headers.common = {'Content-Type': 'text/html'};
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .run(function ($rootScope) {
    $rootScope.nav = 'write';
    $rootScope.isIntervalStarted = false;
  });
