// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('BMIApp', ['ionic','BMIApp.controllers', 'BMIApp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "app/pages/menu.html",
    controller: 'menuCtrl'
  })
    .state('app.home', {
      url: '/home',
      
      views:{
        'menuContent' :{
          
          templateUrl: 'app/pages/home.html',
          controller: 'homeCtrl'
        }
      }
      
    })
    .state('app.news', {
      url: '/news',
      views:{
        'menuContent' :{
          templateUrl: 'app/pages/news.html',
          controller: 'newsCtrl'
        }
      }
     
      
    })
    .state('app.events', {
      url: '/events',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/events.html',
          controller: 'eventsCtrl'
        }
      }
      
    })
    .state('app.aboutUs', {
      url: '/aboutUs',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/aboutUs.html',
          controller: 'aboutUsCtrl'
        }
      }
      
    })
    .state('app.serviceCatalog', {
      url: '/serviceCatalog',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/serviceCatalog.html',
          controller: 'serviceCatalogCtrl'
        }
      }
      
    })
    .state('app.eServices', {
      url: '/eServices',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/eservices.html',
          controller: 'eServicesCtrl'
        }
      }
      
    })
    .state('app.drugDirectory', {
      url: '/drugDirectory',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/drugDirectory.html',
          controller: 'drugDirectoryCtrl'
        }
      }
      
    })
    .state('app.healthTips', {
      url: '/healthTips',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/healthTips.html',
          controller: 'healthTipsCtrl'
        }
      }
      
    })
    .state('app.poll', {
      url: '/poll',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/poll.html',
          controller: 'pollCtrl'
        }
      }
      
    })
    .state('app.bmiCal', {
      url: '/bmiCal',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/bmiCal.html',
          controller: 'bmiCalCtrl'
        }
      }
      
    })
    .state('app.stepsAndCalories', {
      url: '/stepsAndCalories',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/stepsAndCalories.html',
          controller: 'stepsAndCaloriesCtrl'
        }
      }
      
    })
    .state('app.hospitals', {
      url: '/hospitals',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/hospitals.html',
          controller: 'hospitalsCtrl'
        }
      }
      
    })
    .state('app.daileyDietInfo', {
      url: '/daileyDietInfo',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/daileyDietInfo.html',
          controller: 'daileyDietInfoCtrl'
        }
      }
      
    })
    .state('app.contactUs', {
      url: '/contactUs',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/contactUs.html',
          controller: 'contactUsCtrl'
        }
      }
      
    })
    .state('app.contactMinister', {
      url: '/contactMinister',
      views:{
        'menuContent' : {
          templateUrl: 'app/pages/contactMinister.html',
          controller: 'contactMinisterCtrl'
        }
      }
      
    })

  $urlRouterProvider.otherwise('/app/news');

});


var app_services = angular.module('BMIApp.services', []);
var app_controllers = angular.module('BMIApp.controllers', []);
