'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',//home, listing of all posts, select title to get individual post (view2)
  'myApp.view2',//indibidual post with comments and form to ad comments
  'myApp.view3',//create post in editor
  'myApp.view4',//choose to approve a comment, approved comments will appear with the post in view2
  'myApp.view5',//login page
  'myApp.view6',//welcome page
  'myApp.view7',//signup page - version 1
  'myApp.view8',//about page
  'myApp.view9',//projects
  'myApp.view10',//contact page; form is sent with contact info to the database and by email to adminstrator
  'myApp.view11',//list of posts; select one to edit
  'myApp.view12',//editor for post selected in view11
  'myApp.view13',//new signup page   
  'myApp.version',
  'ngMessages',
    'angular-loading-bar',
    'ngResource',
    'ngMaterial'

]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
	  .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      })
	  .when('/view3', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl'
      })
	   .when('/view5', {
        templateUrl: 'view5/view5.html',
        controller: 'View5Ctrl'
      })
	  .when('/view4', {
        templateUrl: 'view4/view4.html',
        controller: 'View4Ctrl'
      })
	   .when('/view6', {
        templateUrl: 'view6/view6.html',
        controller: 'View6Ctrl'
      })
	  .when('/view7', {
        templateUrl: 'view7/view7.html',
        controller: 'view7Ctrl'
      })
	  	  .when('/view8', {
        templateUrl: 'view8/view8.html',
        controller: 'view8Ctrl'
      })
        .when('/view9', {
            templateUrl: 'view9/view9.html',
            controller: 'view9Ctrl'
        })
        .when('/projects', {
            templateUrl: 'view9/view9.html',
            controller: 'view9Ctrl'
        })
	  .when('/view10', {
        templateUrl: 'view10/view10.html',
        controller: 'view10Ctrl'
      })
	  .when('/view11', {
        templateUrl: 'view11/view11.html',
        controller: 'view11Ctrl'
      })
	  .when('/view12', {
        templateUrl: 'view12/view12.html',
        controller: 'view12Ctrl'
      })
	  .when('/view13', {
        templateUrl: 'view13/view13.html',
        controller: 'view13Ctrl'
      })

	  .when('/post/:permalink', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      })
	  .when('/logout', {
        templateUrl: 'view6/view6.html',
        controller: 'View6Ctrl'
      })
        .when('/login', {
            templateUrl: 'view5/view5.html',
            controller: 'View5Ctrl'
        })
	  
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
    .config(function($mdThemingProvider, $mdIconProvider){

        /* $mdIconProvider
         .defaultIconSet("./assets/svg/avatars.svg", 128)
         .icon("menu"       , "./assets/svg/menu.svg"        , 24)
         .icon("share"      , "./assets/svg/share.svg"       , 24)
         .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
         .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
         .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
         .icon("phone"      , "./assets/svg/phone.svg"       , 512);*/

        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('deep-orange')
            .warnPalette('red')
            .backgroundPalette('grey');

    })
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }])
    .config(function($mdAriaProvider) {
        // Globally disables all ARIA warnings.
        $mdAriaProvider.disableWarnings();
    });