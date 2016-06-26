'use strict';

/**
 * @ngdoc function
 * @name angularStarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStarterApp
 */
angular.module('angularStarterApp')
  .controller('MainCtrl', function (Task) {
    var vm = this;
    

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
