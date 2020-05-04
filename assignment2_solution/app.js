(function () {
'use strict';

var app = angular.module('ShoppingListCheckOff', []);
app.controller('ToBuyController', ToBuyController);
app.controller('AlreadyBoughtController', AlreadyBoughtController);
app.service('ShoppingListService',ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListService.getToBuyList();

  toBuyList.markBought = function (itemIndex) {
    ShoppingListService.markBought(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController (ShoppingListService) {
  var boughtList = this;
  boughtList.items = ShoppingListService.getBoughtList();
}

function ShoppingListService() {
  var service = this;
  var toBuyList = [
    { name: "Milk", quantity: 2 },
    { name: "Bread", quantity: 5 },
    { name: "Cheese", quantity: 1 },
    { name: "Cookies", quantity: 10 },
    { name: "Popcorn", quantity: 6 },
    { name: "Water", quantity: 20 }
  ]
  var boughtList = [];

  service.markBought = function (itemIndex) {
    boughtList.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex, 1);
  };

  service.getToBuyList = function () {
    return toBuyList;
  };

  service.getBoughtList = function () {
    return boughtList;
  };
}

})();
