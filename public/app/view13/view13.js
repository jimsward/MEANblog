'use strict';

angular.module('myApp.view13', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view13', {
    templateUrl: 'view13/view13.html',
    controller: 'view13Ctrl'
  });
}])

.controller('view13Ctrl', [ '$routeParams', '$scope', '$http', '$route', '$location', function( $routeParams, $scope, $http, $route, $location ) {
	$scope.password = ""
	$scope.verify = ""
	$scope.username = ""
	$scope.email = ""
	$scope.submitSignup = function(){
			var data = { username : $scope.username, email : $scope.email }
			$http.post( '/signup', data ).then( function(response){
			//compose email msg
			var text = 'The password for ' + response.data.username + ' is ' + response.data.password 
			var data = { 'text' : text, 'email' : $scope.email }
			$http.post('/sendemail', data).then( function(){
				$location.path( '/view1' )
				})
			},
			function errorCallback(response){
				$scope.username_error = response.data.error
				})
		}
	$scope.redirect = function(){
		$location.path('/view5')
		}
}]);