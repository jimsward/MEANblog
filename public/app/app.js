'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5', 
  'myApp.view6', 
  'myApp.view7',
  'myApp.view8',
  'myApp.view9',
  'myApp.view10',  
  'myApp.version',
  'ngMessages',
  'textAngular'
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
	  .when('/view10', {
        templateUrl: 'view10/view10.html',
        controller: 'view10Ctrl'
      })

	  .when('/post/:permalink', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      })
	  .when('/logout', {
        templateUrl: 'view6/view6.html',
        controller: 'View6Ctrl'
      })
	  
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
