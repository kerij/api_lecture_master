var myApp = angular.module('myApp', []);

myApp.controller("petController", ["$scope", "$http", function($scope, $http) {
  var key = 'b900e0d5e332753a460a64eaa8de00fd';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=barnyard';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });




  }

}]);
