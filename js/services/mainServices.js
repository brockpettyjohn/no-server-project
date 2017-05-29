angular.module('noserver')
    .service('mainServices', function ($http) {

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


       var thailand = new Trip('THAILAND', '3 weeks', 'April', '2014', "https://c1.staticflickr.com/5/4246/34765741241_00b196402d_c.jpg", "https://c1.staticflickr.com/5/4198/34054616104_92bbe14b00_c.jpg", "https://c1.staticflickr.com/5/4223/34086875803_2e8004b42d_c.jpg", "https://c1.staticflickr.com/5/4245/34897247955_d2a27572ea_c.jpg", "https://c1.staticflickr.com/5/4272/34734186352_781efddcf8_c.jpg", "https://c1.staticflickr.com/5/4247/34086873533_f443d3cac2_c.jpg",  "https://c1.staticflickr.com/5/4244/34765651971_030ca44b2c_c.jpg", "https://c1.staticflickr.com/5/4268/34765697001_4ebbfc3be1_c.jpg", "https://c1.staticflickr.com/5/4227/34897365865_4752b577c0_c.jpg");

        var costaRica = new Trip('COSTA RICA', '1 week', 'February', '2015', "https://c1.staticflickr.com/5/4271/34795866712_5c133d96f7_c.jpg", "https://c1.staticflickr.com/5/4219/34795866522_d968e333bb_c.jpg", "https://c1.staticflickr.com/5/4272/34572307040_2b6e20e12e_c.jpg", "https://c1.staticflickr.com/5/4196/34795866382_fe87ab21c5_c.jpg", "https://c1.staticflickr.com/5/4270/34795866332_0ddd4fcaab_c.jpg", "https://c1.staticflickr.com/5/4270/34572306740_b4dc268767_c.jpg", "https://c1.staticflickr.com/5/4273/34795866222_0796f1ccd4_c.jpg", "https://c1.staticflickr.com/5/4223/34572306470_0a0d97b39c_c.jpg", "https://c1.staticflickr.com/5/4252/34795866122_7ceaafc43e_c.jpg" );

        var nicaragua = new Trip('NICARAGUA', '1 week', 'February', '2015', "https://c1.staticflickr.com/5/4248/34795867052_dc7db4f0ea_c.jpg", "https://c1.staticflickr.com/5/4203/34795867012_c661bcb72c_c.jpg", "https://c1.staticflickr.com/5/4219/34795866992_7cb2c3c91f_c.jpg", "https://c1.staticflickr.com/5/4251/34795866952_ae6336d8a4_c.jpg", "https://c1.staticflickr.com/5/4267/34795866862_a3aa392b24_c.jpg", "https://c1.staticflickr.com/5/4250/34572307540_2366d7feb0_c.jpg", "https://c1.staticflickr.com/5/4203/34795866682_ecbf4bff26_c.jpg", "https://c1.staticflickr.com/5/4270/34795866612_078d49fe46_c.jpg", "https://c1.staticflickr.com/5/4226/34572306310_f610258876_c.jpg");

        var holland = new Trip('HOLLAND', '1 week', 'June', '2013', "https://c1.staticflickr.com/5/4197/34857783086_57c92fd46a_c.jpg", "https://c1.staticflickr.com/5/4252/34511134500_94cc28fb6e_c.jpg", "https://c1.staticflickr.com/5/4270/34857781546_14e239f7e1_c.jpg", "https://c1.staticflickr.com/5/4198/34857782446_4c722d5cc9_c.jpg", "https://c1.staticflickr.com/5/4249/34087440363_ab66a6f7a9_c.jpg", "https://c1.staticflickr.com/5/4272/34511100410_de029ccb78_c.jpg", "https://c1.staticflickr.com/5/4250/34857770526_4b7ee98bd7_c.jpg", "https://c1.staticflickr.com/5/4227/34897811345_99f4274d25_c.jpg", "https://c1.staticflickr.com/5/4251/34766249611_60dc9f65e8_c.jpg");

        var sweden = new Trip('SWEDEN', '3 days', 'June', '2013', "https://c1.staticflickr.com/5/4220/34765843161_6f64ff5524_c.jpg","https://c1.staticflickr.com/5/4248/34510753910_de86aced89_c.jpg","https://c1.staticflickr.com/5/4203/34765838921_c54577c53c_c.jpg","https://c1.staticflickr.com/5/4247/34510756580_0f95a4d091_c.jpg","https://c1.staticflickr.com/5/4223/34765823851_6569f93825_c.jpg","https://c1.staticflickr.com/5/4251/34897459485_7e301021f3_c.jpg", "https://c1.staticflickr.com/5/4272/34734308122_22625e8c4b_c.jpg","https://c1.staticflickr.com/5/4221/34734309892_df8833cc59_c.jpg","https://c1.staticflickr.com/5/4275/34765835451_421ae076f4_c.jpg"  
        );

        var finland = new Trip('FINLAND', '4 days', 'July', '2013', "https://c1.staticflickr.com/5/4197/34054885304_2df86c4d62_c.jpg", "https://c1.staticflickr.com/5/4271/34054859754_0999e68e4a_c.jpg","https://c1.staticflickr.com/5/4248/34054899074_246a44bfd1_c.jpg", "https://c1.staticflickr.com/5/4270/34054891534_927d9f78d5_c.jpg", "https://c1.staticflickr.com/5/4200/34054878574_9e92361451_c.jpg", "https://c1.staticflickr.com/5/4272/34087117273_0e3a54be9e_c.jpg", "https://c1.staticflickr.com/5/4198/34054868614_ccf37ea9f8_c.jpg","https://c1.staticflickr.com/5/4219/34857497476_543a11359a_c.jpg", "https://c1.staticflickr.com/5/4197/34054865184_8a2394840c_c.jpg" );

        var france = new Trip('FRANCE', '3 days', 'July', '2013', "https://c1.staticflickr.com/5/4248/34734501672_c32601202f_c.jpg", "https://c1.staticflickr.com/5/4246/34734510092_c26bd2fdc0_c.jpg", "https://c1.staticflickr.com/5/4220/34734472802_727164a488_c.jpg", "https://c1.staticflickr.com/5/4270/34734495952_67d8cf7fff_c.jpg", "https://c1.staticflickr.com/5/4195/34734493922_5aa989d521_c.jpg", "https://c1.staticflickr.com/5/4195/34734513532_a64b8b94c1_c.jpg", "https://c1.staticflickr.com/5/4202/34766056151_7b3920b9ec_c.jpg", "https://c1.staticflickr.com/5/4202/34857576426_800e6420d1_c.jpg", "https://c1.staticflickr.com/5/4251/34054928244_4c5478c473_c.jpg");

        var germany = new Trip('GERMANY', '1 week', 'July', '2013', "https://c1.staticflickr.com/5/4269/34734652332_18f6e1a0d8_c.jpg", "https://c1.staticflickr.com/5/4268/34897718225_25832b605d_c.jpg", "https://c1.staticflickr.com/5/4249/34857680076_40f416acee_c.jpg", "https://c1.staticflickr.com/5/4195/34766143721_08906562c4_c.jpg", "https://c1.staticflickr.com/5/4228/34087299913_6bc6d3e452_c.jpg", "https://c1.staticflickr.com/5/4224/34734637052_4ffed9d449_c.jpg", "https://c1.staticflickr.com/5/4248/34087310383_099a96ed2b_c.jpg", "https://c1.staticflickr.com/5/4195/34055071394_3bf3eb1a6f_c.jpg", "https://c1.staticflickr.com/5/4228/34766188161_1a3ac5bec2_c.jpg" );

        // var spain = new Trip('SPAIN', '3 days', 'July', '2013', "https://c1.staticflickr.com/5/4227/34055296624_4218b7d5f2_c.jpg",  );

        var croatia = new Trip('CROATIA', '3 days', 'March', '2017', "https://c1.staticflickr.com/3/2884/33071606863_a39b806866_c.jpg", "https://c1.staticflickr.com/3/2942/33885050415_87e8cb34ce_c.jpg", "https://c1.staticflickr.com/5/4273/34734858872_6460f52c0a_c.jpg", "https://c1.staticflickr.com/3/2813/33495663860_d05c1102b0_c.jpg", "https://c1.staticflickr.com/5/4197/34857955156_982f8e7ec5_c.jpg", "https://c1.staticflickr.com/5/4270/34857958016_14e19c50cb_c.jpg", "https://c1.staticflickr.com/4/3852/33495656540_fc952aaec9_c.jpg", "https://c1.staticflickr.com/3/2851/33839384996_9a2d2374e1_c.jpg", "https://c1.staticflickr.com/4/3949/33036587694_351731b156_c.jpg");

        var slovenia = new Trip('SLOVENIA', '2 days', 'March', '2017', "https://c1.staticflickr.com/5/4197/34897935725_b85daa6147_c.jpg", "https://c1.staticflickr.com/5/4245/34055316804_2743b2bdca_c.jpg", "https://c1.staticflickr.com/3/2921/33067056363_562e912b92_c.jpg", "https://c1.staticflickr.com/3/2919/33495684640_c982300448_c.jpg", "https://c1.staticflickr.com/5/4271/34087527453_965bd535b4_c.jpg", "https://c1.staticflickr.com/5/4274/34087604383_cb691db5ae_c.jpg", "https://c1.staticflickr.com/3/2934/33497203640_b9c974afb8_c.jpg", "https://c1.staticflickr.com/3/2897/33495611210_9e794b6d0e_c.jpg", "https://c1.staticflickr.com/3/2927/33067061453_e5e6695a5b_c.jpg");

        var czechRep = new Trip('CZECH REPUBLIC', '1 day', 'July', '2013', "https://c1.staticflickr.com/5/4224/34857585036_4435ca4ff8_c.jpg", "https://c1.staticflickr.com/5/4228/34857585546_5d3772282d_c.jpg", "https://c1.staticflickr.com/5/4248/34054983974_d761e09edc_c.jpg", "https://c1.staticflickr.com/5/4271/34055004894_3aefcb4f91_c.jpg", "https://c1.staticflickr.com/5/4227/34857599026_e9f8304b7a_c.jpg", "https://c1.staticflickr.com/5/4249/34055017634_00a45ca9c5_c.jpg", "https://c1.staticflickr.com/5/4272/34734571552_78fb32f675_c.jpg", "https://c1.staticflickr.com/5/4198/34055000544_5b34ba7712_c.jpg", "https://c1.staticflickr.com/5/4221/34857584496_79ba9e0317_c.jpg" );

        var austria = new Trip('AUSTRIA', '2 days', 'July', '2013', "https://c1.staticflickr.com/5/4246/34734379582_0257242dc5_c.jpg", "https://c1.staticflickr.com/5/4275/34765917291_d124b7d0ed_c.jpg", "https://c1.staticflickr.com/5/4248/34054844724_5ecdccd228_c.jpg", "https://c1.staticflickr.com/5/4246/34857476266_038276293d_c.jpg", "https://c1.staticflickr.com/5/4222/34510793420_d0b4784e7b_c.jpg", "https://c1.staticflickr.com/5/4246/34087266583_8b78090f95_c.jpg", "https://c1.staticflickr.com/5/4225/34734344492_1a0c8db395_c.jpg", "https://c1.staticflickr.com/5/4252/34734343072_388cc1ca8a_c.jpg", "https://c1.staticflickr.com/5/4251/34734346512_e3024fbfe8_c.jpg");



        this.getAll = function() {
            return [thailand, costaRica, nicaragua, holland, sweden, finland, france, germany, austria, croatia, slovenia, czechRep]
        }
        
        this.currentCountry= function(country){
            return this.getAll().filter(value => value.country===country)
        }



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

