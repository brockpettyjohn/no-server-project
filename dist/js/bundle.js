'use strict';

angular.module('noserver', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home.html'
    }).state('trips', {
        url: '/trips/:country',
        templateUrl: '/views/trips.html',
        controller: 'tripCtrl'
    });
});
'use strict';

angular.module('noserver').controller('mainCtrl', function ($scope, mainServices) {

  $scope.countries = mainServices.getAll();
  console.log($scope.countries);

  // $scope.input = mainServices.test
  // $scope.get = mainServices.getAll();
  // $scope.getting = mainServices.getOne(location)
  // console.log($scope.getting)

});
'use strict';

angular.module('noserver').controller('tripCtrl', function ($scope, $stateParams) {
  $scope.name = $stateParams.country;
  console.log($stateParams.country);
});
'use strict';

angular.module('noserver').service('mainServices', function () {

    function Trip(country, duration, traveledWith, month, year, photos) {
        this.country = country;
        this.duration = duration;
        this.traveledWith = traveledWith;
        this.month = month;
        this.year = year;
        this.photos = photos;
    }

    var thailand = new Trip('Thailand', '3 weeks', 'April', '2014', []);

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

    // var austria = new Trip('Austria', '2 days', 'July', '2013');

    this.getAll = function () {
        return [thailand, costaRica, nicaragua, holland, sweden, finland, france, germany, spain, croatia, slovenia, czechRep];
    };

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
