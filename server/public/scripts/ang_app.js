var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/cat', {
      templateUrl: '/views/partials/cat.html',
      controller: "catController"
    })
    .when('/barnyard', {
      templateUrl: '/views/partials/barnyard.html',
      controller: "barnyardController"
    })
    .when('/smallfurry', {
      templateUrl: '/views/partials/smallfurry.html',
      controller: "smallfurryController"
    })
    .otherwise({
      redirectTo: '/index.html'
    })
}]);

myApp.controller("catController", ["$scope", "$http", function($scope, $http) {
  var key = 'beb24f67911c3af4d528df369362a516';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);

myApp.controller("barnyardController", ["$scope", "$http", function($scope, $http) {
  var key = 'beb24f67911c3af4d528df369362a516';
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
  $scope.getRandomPet();
}]);

myApp.controller("smallfurryController", ["$scope", "$http", function($scope, $http) {
  var key = 'beb24f67911c3af4d528df369362a516';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=smallfurry';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);
