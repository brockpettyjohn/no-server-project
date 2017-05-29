angular.module('noserver')
.controller('mainCtrl', function($scope, mainServices){

$scope.countries = mainServices.getAll();
console.log($scope.countries)

$scope.selectPic = function(currentPic){
    $scope.selectedPic = currentPic
}

$scope.closeModal = function(){
    $scope.selectedPic = null
}
// $scope.photos = function(){
//     mainServices.photoData().then(function(response){
//         $scope.putInView = response.data
//         console.log($scope.putInView)
//     })
// }
// $scope.photos()
// $scope.input = mainServices.test
// $scope.get = mainServices.getAll();
// $scope.getting = mainServices.getOne(location)
// console.log($scope.getting)


});