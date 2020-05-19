(function() {
'use strict';

var app = angular.module('NarrowItDownApp', []);
app.controller('NarrowItDownController', NarrowItDownController);
app.service('MenuSearchService', MenuSearchService);
app.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
app.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'found',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['$scope','MenuSearchService']
function NarrowItDownController($scope, MenuSearchService){
  var narrowIt = this;

  narrowIt.getMatchedMenuItems = function(searchTerm) {
    narrowIt.found = MenuSearchService.getMatchedMenuItems(searchTerm);
  };

  narrowIt.removeItem = function (itemIndex) {
    narrowIt.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    var foundItems = [];

    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });

    //console.log("searchTerm is " + searchTerm);
    response.then(function (response) {
      // process result and only keep items that match
      var menuItems = response.data.menu_items;
      for (var i in menuItems) {
          // console.log("search term in description " + menuItems[i].description.toLowerCase());
          if (menuItems[i].description.toLowerCase().includes(searchTerm)) {
            // console.log("term found in " + menuItems[i].name);
            foundItems.push(menuItems[i]);
          }
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    // return processed items
    return foundItems;
  };
}

})();
