(function() {
'use strict';

var app = angular.module('NarrowItDownApp', []);
app.controller('NarrowItDownController', NarrowItDownController);
app.service('MenuSearchService', MenuSearchService);
app.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['$scope','MenuSearchService']
function NarrowItDownController($scope, MenuSearchService){
  var narrowIt = this;

  narrowIt.getAllMenuItems = function() {
    var service = MenuSearchService.getAllMenuItems();

    service.then(function (response) {
      narrowIt.menuItems = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  // narrowIt.getMatchedMenuItems = function(searchTerm) {
  //   var service = MenuSearchService.getMatchedMenuItems(searchTerm);
  //
  //   service.then(function (response) {
  //     narrowIt.menuItems = response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getAllMenuItems = function() {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });

    return response;
  };

  // service.getMatchedMenuItems = function(searchTerm) {
  //   var response = $http({
  //     method: "GET",
  //     url: (ApiBasePath + "/menu_items.json"),
  //   });
  //
  //   return response;
  // };
}


})();
