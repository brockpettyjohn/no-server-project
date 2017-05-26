angular.module('noserver')
    .service('mainServices', function () {

        function Trip(country, duration, traveledWith, month, year) {
            this.country = country;
            this.duration = duration;
            this.traveledWith = traveledWith;
            this.month = month;
            this.year = year;
        }


        var thailand = new Trip('Thailand', '3 weeks', 'April', '2014')

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

