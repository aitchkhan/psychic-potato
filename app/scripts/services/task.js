'use strict';

/**
 * @ngdoc service
 * @name angularStarterApp.task
 * @description
 * # task
 * Factory in the angularStarterApp.
 */
angular.module('angularStarterApp')
  .factory('Task', function () {
    // Service logic
    // ...

    var task = {
      type: 1,
      theme: "Grocery",
      contactName: null,
      contactNumber: null,
      customerAddress: null,
      details: null
    };

    // Public API here
    return {

      createTask: function () {
        return task;
      }
    };
  });
