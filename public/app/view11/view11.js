'use strict';

angular.module('myApp.view11', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view11', {
    templateUrl: 'view11/view11.html',
    controller: 'view11Ctrl'
  });
}])

.controller('view11Ctrl', [ '$routeParams', '$scope', '$http', '$route', '$location', function( $routeParams, $scope, $http, $route, $location ) {
	$http.get('/main').success( function(response){
	$scope.myposts = response.myposts	
	$scope.username = response.username	
	$scope.user = $scope.username ? true : false
	for ( var i=0; i < $scope.myposts.length; i++ )
		{
		var html = angular.element('#' + i).text()
		angular.element('#' + i).html(html)
		}
	})
	$scope.toEdit = function( permalink ){
		var obj = {}
		obj.permalink = permalink
		$location.path( '/view12' ).search( obj )
		}
	
}]);