'use strict';

angular.module('myApp.view7', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7', {
    templateUrl: 'view7/view7.html',
    controller: 'view7Ctrl'
  });
}])

.controller('view7Ctrl', [ '$routeParams', '$scope', '$http', '$route', '$location', function( $routeParams, $scope, $http, $route, $location ) {
	$scope.password = ""
	$scope.verify = ""
	$scope.username = ""
	$scope.email = ""
	$scope.submitSignup = function(){
		if ( $scope.password == $scope.verify )
		{
			var data = { password : $scope.password, verify : $scope.verify, username : $scope.username, email : $scope.email }
			$http.post( '/signup', data ).then( function(){
			$location.path( '/view1' )
			})
		}
		else
		
		alert( 'Passwords must match!' )
		}
}]);