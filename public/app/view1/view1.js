'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [  '$scope', '$http', '$location', function( $scope, $http, $location ) {
	$http.get('/main').success( function(response){
		$scope.myposts = response.myposts
		} )
	$scope.toView2 = function( permalink ){	
	var obj = {}
	obj.permalink = permalink	
		$location.path( '/view2' ).search( obj )
		}

}]);