'use strict';

/**
 * @ngdoc function
 * @name angularStarterApp.controller:CreateOrderCtrl
 * @description
 * # CreateOrderCtrl
 * Controller of the angularStarterApp
 */
angular.module('angularStarterApp')
  .controller('CreateOrderCtrl', function (Task) {
    var vm = this;
    vm.orders = [];

    vm.orders.push(Task.createTask());
    console.log(vm.orders);
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
