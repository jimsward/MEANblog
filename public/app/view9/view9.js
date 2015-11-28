'use strict';

angular.module('myApp.view9', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view9', {
    templateUrl: 'view9/view9.html',
    controller: 'view9Ctrl'
  });
}])

.controller('view9Ctrl', [ '$routeParams', '$scope', '$http', '$route', '$location', function( $routeParams, $scope, $http, $route, $location ) {
	
}]);