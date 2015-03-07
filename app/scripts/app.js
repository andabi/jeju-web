'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
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
  .config(function ($routeProvider) {
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
  })
  .run(function ($rootScope) {
    $rootScope.nav = 'write'
  });
