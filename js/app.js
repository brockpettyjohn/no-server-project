angular.module('noserver', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/')

        $stateProvider
            // .state('home', {
            //     url: '/',
            //     templateUrl: '../home.html'

            // })
            // .state('thailand', {
            //     url: '/thailand',
            //     templateUrl: 'thailand.html'
            // })
            // .state('costa-rica', {
            //     url: "/costa-rica",
            //     templateUrl: "costa-rica.html"
            // })
            // .state('nicaragua', {
            //     url: '/nicaragua',
            //     templateUrl: 'nicaragua.html'

            // })
            // .state('holland', {
            //     url: '/holland',
            //     templateUrl: 'holland.html'
            // })
            // .state('sweden', {
            //     url: "/sweden",
            //     templateUrl: "sweden.html"
            // })
            // .state('finland', {
            //     url: '/finland',
            //     templateUrl: 'finland.html'
            // })
            // .state('france', {
            //     url: "/france",
            //     templateUrl: "france.html"
            // })
            // .state('germany', {
            //     url: '/germany',
            //     templateUrl: 'germany.html'

            // })
            // .state('spain', {
            //     url: '/spain',
            //     templateUrl: 'spain.html'
            // })
            // .state('croatia', {
            //     url: "/croatia",
            //     templateUrl: "croatia.html"
            // })
            // .state('slovenia', {
            //     url: '/slovenia',
            //     templateUrl: 'slovenia.html'

            // })
            // .state('czech-rep', {
            //     url: '/czech-rep',
            //     templateUrl: 'czech-rep.html'
            // })
            // .state('austria', {
            //     url: "/austria",
            //     templateUrl: "austria.html"
            // })
    })