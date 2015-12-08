'use strict';

angular.module('myApp.view12', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view12', {
    templateUrl: 'view12/view12.html',
    controller: 'view12Ctrl'
  });
}])

.controller('view12Ctrl', [ '$routeParams', '$scope', '$http', '$route', '$location', function( $routeParams, $scope, $http, $route, $location ) {
	var permalink = $routeParams.permalink
	$http.get('/post/' + permalink).then( function( response ){
		$scope.post = response.data
	})
	$scope.submitEdit = function(){
		var obj = {}
		obj.permalink = permalink
		obj.body = $scope.post.body
	$http.post('/updatepost', obj)
	.then( function( response ){
		$location.path('/view1')
		} )
	}
	
}]);