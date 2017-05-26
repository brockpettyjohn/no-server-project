angular.module('noserver', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/')

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html'
            })
            .state('trips', {
                url: '/trips/:country',
                templateUrl: '/views/trips.html',
                controller: 'tripCtrl'
            })
           
    })