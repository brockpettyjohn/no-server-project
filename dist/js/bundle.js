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
'use strict';

angular.module('noserver').controller('tripCtrl', function ($scope, $stateParams, mainServices) {
    $scope.name = $stateParams.country;
    console.log($stateParams.country);
    $scope.currentCountry = mainServices.currentCountry($stateParams.country)[0];
});
'use strict';

angular.module('noserver').service('mainServices', function ($http) {

    // this.photoData = function(){
    //     return $http.get('https://api.flickr.com/services/rest/')
    // };


    function Trip(country, duration, month, year, photos, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9) {
        this.country = country;
        this.duration = duration;
        this.month = month;
        this.year = year;
        this.photos = photos;
        this.photos2 = photos2;
        this.photos3 = photos3;
        this.photos4 = photos4;
        this.photos5 = photos5;
        this.photos6 = photos6;
        this.photos7 = photos7;
        this.photos8 = photos8;
        this.photos9 = photos9;
    }

    var thailand = new Trip('THAILAND', '3 weeks', 'April', '2014', "https://c1.staticflickr.com/5/4246/34765741241_00b196402d_c.jpg", "https://c1.staticflickr.com/5/4198/34054616104_92bbe14b00_c.jpg", "https://c1.staticflickr.com/5/4223/34086875803_2e8004b42d_c.jpg", "https://c1.staticflickr.com/5/4245/34897247955_d2a27572ea_c.jpg", "https://c1.staticflickr.com/5/4272/34734186352_781efddcf8_c.jpg", "https://c1.staticflickr.com/5/4247/34086873533_f443d3cac2_c.jpg", "https://c1.staticflickr.com/5/4244/34765651971_030ca44b2c_c.jpg", "https://c1.staticflickr.com/5/4268/34765697001_4ebbfc3be1_c.jpg", "https://c1.staticflickr.com/5/4227/34897365865_4752b577c0_c.jpg");

    var costaRica = new Trip('COSTA RICA', '1 week', 'February', '2015', "https://c1.staticflickr.com/5/4196/34054430974_d5c0e27bde_c.jpg");

    var nicaragua = new Trip('NICARAGUA', '1 week', 'February', '2015');

    var holland = new Trip('HOLLAND', '1 week', 'June', '2013', "https://c1.staticflickr.com/5/4197/34857783086_57c92fd46a_c.jpg", "https://c1.staticflickr.com/5/4252/34511134500_94cc28fb6e_c.jpg", "https://c1.staticflickr.com/5/4270/34857781546_14e239f7e1_c.jpg", "https://c1.staticflickr.com/5/4198/34857782446_4c722d5cc9_c.jpg", "https://c1.staticflickr.com/5/4249/34087440363_ab66a6f7a9_c.jpg", "https://c1.staticflickr.com/5/4272/34511100410_de029ccb78_c.jpg", "https://c1.staticflickr.com/5/4250/34857770526_4b7ee98bd7_c.jpg", "https://c1.staticflickr.com/5/4227/34897811345_99f4274d25_c.jpg", "https://c1.staticflickr.com/5/4251/34766249611_60dc9f65e8_c.jpg");

    var sweden = new Trip('SWEDEN', '3 days', 'June', '2013', "https://c1.staticflickr.com/5/4220/34765843161_6f64ff5524_c.jpg", "https://c1.staticflickr.com/5/4248/34510753910_de86aced89_c.jpg", "https://c1.staticflickr.com/5/4203/34765838921_c54577c53c_c.jpg", "https://c1.staticflickr.com/5/4247/34510756580_0f95a4d091_c.jpg", "https://c1.staticflickr.com/5/4223/34765823851_6569f93825_c.jpg", "https://c1.staticflickr.com/5/4251/34897459485_7e301021f3_c.jpg", "https://c1.staticflickr.com/5/4272/34734308122_22625e8c4b_c.jpg", "https://c1.staticflickr.com/5/4221/34734309892_df8833cc59_c.jpg", "https://c1.staticflickr.com/5/4275/34765835451_421ae076f4_c.jpg");

    var finland = new Trip('FINLAND', '4 days', 'July', '2013', "https://c1.staticflickr.com/5/4197/34054885304_2df86c4d62_c.jpg", "https://c1.staticflickr.com/5/4271/34054859754_0999e68e4a_c.jpg", "https://c1.staticflickr.com/5/4248/34054899074_246a44bfd1_c.jpg", "https://c1.staticflickr.com/5/4270/34054891534_927d9f78d5_c.jpg", "https://c1.staticflickr.com/5/4200/34054878574_9e92361451_c.jpg", "https://c1.staticflickr.com/5/4272/34087117273_0e3a54be9e_c.jpg", "https://c1.staticflickr.com/5/4198/34054868614_ccf37ea9f8_c.jpg", "https://c1.staticflickr.com/5/4219/34857497476_543a11359a_c.jpg", "https://c1.staticflickr.com/5/4197/34054865184_8a2394840c_c.jpg");

    var france = new Trip('FRANCE', '3 days', 'July', '2013', "https://c1.staticflickr.com/5/4248/34734501672_c32601202f_c.jpg", "https://c1.staticflickr.com/5/4246/34734510092_c26bd2fdc0_c.jpg", "https://c1.staticflickr.com/5/4220/34734472802_727164a488_c.jpg", "https://c1.staticflickr.com/5/4270/34734495952_67d8cf7fff_c.jpg", "https://c1.staticflickr.com/5/4195/34734493922_5aa989d521_c.jpg", "https://c1.staticflickr.com/5/4195/34734513532_a64b8b94c1_c.jpg", "https://c1.staticflickr.com/5/4202/34766056151_7b3920b9ec_c.jpg", "https://c1.staticflickr.com/5/4202/34857576426_800e6420d1_c.jpg", "https://c1.staticflickr.com/5/4251/34054928244_4c5478c473_c.jpg");

    var germany = new Trip('GERMANY', '1 week', 'July', '2013', "https://c1.staticflickr.com/5/4269/34734652332_18f6e1a0d8_c.jpg", "https://c1.staticflickr.com/5/4268/34897718225_25832b605d_c.jpg", "https://c1.staticflickr.com/5/4249/34857680076_40f416acee_c.jpg", "https://c1.staticflickr.com/5/4195/34766143721_08906562c4_c.jpg", "https://c1.staticflickr.com/5/4228/34087299913_6bc6d3e452_c.jpg", "https://c1.staticflickr.com/5/4224/34734637052_4ffed9d449_c.jpg", "https://c1.staticflickr.com/5/4248/34087310383_099a96ed2b_c.jpg", "https://c1.staticflickr.com/5/4195/34055071394_3bf3eb1a6f_c.jpg", "https://c1.staticflickr.com/5/4228/34766188161_1a3ac5bec2_c.jpg");

    var spain = new Trip('SPAIN', '3 days', 'July', '2013', "https://c1.staticflickr.com/5/4227/34055296624_4218b7d5f2_c.jpg");

    var croatia = new Trip('CROATIA', '7 days', 'March', '2017');

    var slovenia = new Trip('SLOVENIA', '2 days', 'March', '2017');

    var czechRep = new Trip('CZECH REPUBLIC', '1 day', 'July', '2013', "https://c1.staticflickr.com/5/4224/34857585036_4435ca4ff8_c.jpg", "https://c1.staticflickr.com/5/4228/34857585546_5d3772282d_c.jpg", "https://c1.staticflickr.com/5/4248/34054983974_d761e09edc_c.jpg", "https://c1.staticflickr.com/5/4271/34055004894_3aefcb4f91_c.jpg", "https://c1.staticflickr.com/5/4227/34857599026_e9f8304b7a_c.jpg", "https://c1.staticflickr.com/5/4249/34055017634_00a45ca9c5_c.jpg", "https://c1.staticflickr.com/5/4272/34734571552_78fb32f675_c.jpg", "https://c1.staticflickr.com/5/4198/34055000544_5b34ba7712_c.jpg", "https://c1.staticflickr.com/5/4221/34857584496_79ba9e0317_c.jpg");

    // var austria = new Trip('Austria', '2 days', 'July', '2013');


    this.getAll = function () {
        return [thailand, costaRica, nicaragua, holland, sweden, finland, france, germany, spain, croatia, slovenia, czechRep];
    };

    this.currentCountry = function (country) {
        return this.getAll().filter(function (value) {
            return value.country === country;
        });
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
