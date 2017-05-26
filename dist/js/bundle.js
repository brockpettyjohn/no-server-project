'use strict';

angular.module('noserver', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider;
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
});
'use strict';

angular.module('noserver').controller('mainCtrl', function ($scope, mainServices) {

  // $scope.input = mainServices.test
  // $scope.get = mainServices.getAll();
  // $scope.getting = mainServices.getOne(location)
  // console.log($scope.getting)


});
'use strict';

angular.module('noserver').service('mainServices', function () {

    function Trip(country, duration, traveledWith, month, year) {
        this.country = country;
        this.duration = duration;
        this.traveledWith = traveledWith;
        this.month = month;
        this.year = year;
    }

    var thailand = new Trip('Thailand', '3 weeks', 'April', '2014');

    var costaRica = new Trip('Costa Rica', '1 week', 'February', '2015');

    var nicaragua = new Trip('Nicaragua', '1 week', 'February', '2015');

    var holland = new Trip('Holland', '1 week', 'June', '2013');

    var sweden = new Trip('Sweden', '3 days', 'June', '2013');

    var finland = new Trip('Finland', '4 days', 'July', '2013');

    var france = new Trip('France', '3 days', 'July', '2013');

    var germany = new Trip('Germany', '1 week', 'July', '2013');

    var spain = new Trip('Spain', '3 days', 'July', '2013');

    var croatia = new Trip('Croatia', '7 days', 'March', '2017');

    var slovenia = new Trip('Slovenia', '2 days', 'March', '2017');

    var czechRep = new Trip('Czech Republic', '1 day', 'July', '2013');

    var austria = new Trip('Austria', '2 days', 'July', '2013');

    // var allTrips = [thailand, london]

    // this.getAll = function() {
    //     return thailand;
    // }

    // this.getOne = function(location) {
    //   return allTrips.forEach((key) => {
    //        if(location === key.country) {
    //            return key
    //        }
    //    })

    // }

});
//# sourceMappingURL=bundle.js.map
