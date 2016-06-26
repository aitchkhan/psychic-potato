'use strict';

/**
 * @ngdoc overview
 * @name angularStarterApp
 * @description
 * # angularStarterApp
 *
 * Main module of the application.
 */
angular
  .module('angularStarterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/create-order', {
        templateUrl: 'views/create-order.html',
        controller: 'CreateOrderCtrl',
        controllerAs: 'createOrder'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
