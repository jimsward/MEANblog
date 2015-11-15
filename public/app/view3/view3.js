'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [ '$routeParams', '$scope', '$http', '$route', '$location', function( $routeParams, $scope, $http, $route, $location) {
	$scope.submitPost = function(){
					$http.post( '/newpost', $scope.post ).then( function(){
					$location.path( '/view1' )
			})
	}
}]);