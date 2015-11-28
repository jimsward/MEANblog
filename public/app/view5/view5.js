'use strict';

angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'view5/view5.html',
    controller: 'View5Ctrl'
  });
}])

.controller('View5Ctrl', [ '$routeParams', '$scope', '$http', '$route', '$location', function( $routeParams, $scope, $http, $route, $location ) {	
	$scope.username = ""
	$scope.password = ""
	$scope.submitLogin = function(){
		var data = { username : $scope.username, password : $scope.password }
		$http.post( '/login', data ).then( function( response ){
		$location.path('/view1')			})		
		}
}]);