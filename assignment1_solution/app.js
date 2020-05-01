(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.list = ""

  $scope.Check = function() {
    var nbOfItem = $scope.list.split(',').filter(isEmpty)
    if (!$scope.list){
      $scope.message = "Please enter data first";
      $scope.style_message = {"color" : "red"};
      $scope.style_list = {"border" : "solid red"};
    } else if (nbOfItem.length > 3) {
      $scope.message = "Too much!";
      $scope.style_message = {"color" : "orange"};
      $scope.style_list = {"border" : "solid orange"};
    } else {
      $scope.message = "Enjoy!";
      $scope.style_message = {"color" : "green"};
      $scope.style_list = {"border" : "solid green"};
    }
  };
}

function isEmpty (value) {
    if (/\S/.test(value)) {
      return true;
    } else {
      return false;
    }
}

})();
