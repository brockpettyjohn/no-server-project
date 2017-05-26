angular.module('noserver')
.controller('tripCtrl', function($scope, $stateParams){
$scope.name=$stateParams.country
console.log($stateParams.country)
})