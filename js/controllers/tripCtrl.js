angular.module('noserver')
    .controller('tripCtrl', function ($scope, $stateParams, mainServices) {
        $scope.name = $stateParams.country
        console.log($stateParams.country)
        $scope.currentCountry = mainServices.currentCountry($stateParams.country)[0]
    })