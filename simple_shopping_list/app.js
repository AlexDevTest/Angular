(function () {
'use strict';

var app = angular.module('myShoppingList', []);

app.controller('myCtrl', myCtrl);
myCtrl.$inject = ['$scope'];

function myCtrl($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
  $scope.error = ""

  $scope.addProduct = function() {
    if (!$scope.new_product) {
      $scope.error = "Please enter a product"
    } else if ($scope.products.includes($scope.new_product)) {
      $scope.error = "Product already in the list"
    } else {
      $scope.error = ""
      $scope.products.push($scope.new_product)
    }
  }

  $scope.removeProduct = function(index) {
    $scope.products.splice(index, 1)
  }
}

})();
