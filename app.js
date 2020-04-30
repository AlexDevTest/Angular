(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Alex";
  $scope.sayHello = function () {
    return "Hello"
  };

});


})();
