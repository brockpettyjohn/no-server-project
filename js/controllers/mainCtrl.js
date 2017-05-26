angular.module('noserver')
.controller('mainCtrl', function($scope, mainServices){

$scope.countries = mainServices.getAll();
console.log($scope.countries)

// $scope.input = mainServices.test
// $scope.get = mainServices.getAll();
// $scope.getting = mainServices.getOne(location)
// console.log($scope.getting)


});