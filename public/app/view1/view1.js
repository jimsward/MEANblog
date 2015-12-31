'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngSanitize'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', [  '$scope', '$http', '$location', '$routeParams', function( $scope, $http, $location, $routeParams ) {
	
	var tag = $routeParams.tag
	$http.get('/main').success( function(response){	
	$scope.username = response.username	
	$scope.user = $scope.username ? true : false
		if (tag) {
			response.myposts = response.myposts.filter( function(element){
				return element.tags.indexOf( tag ) > -1
				} )
		}
		$scope.myposts = response.myposts
		/**
		* Each post is in a div with an id numbered by ng-repeat via $index
		* Because the contents of the div are sanitized html, we need to get that text
		* and insert it as html
		*/
		for ( var i=0; i < $scope.myposts.length; i++ )
		{
		var html = angular.element('#' + i).text()
		angular.element('#' + i).html(html)
		console.log(angular.element('#' + i))
		}
		} )
	$scope.toView2 = function( permalink ){	
	var obj = {}
	obj.permalink = permalink	
		$location.path( '/view2' ).search( obj )
		}
	$scope.byTag = function(tag){
		$http.get('/tag/' + tag).success( function(response){
			$scope.myposts = response
			
			
			})
		}
	$scope.login = function(){
		$location.path('/view5')
		}
	$scope.signUp = function(){
		$location.path('/view7')
		}
	$scope.logout = function(){		
		$http.get( '/logout' ).then( function(response){
			$location.path('/')
			} )
		}
}])
.filter('unsafe', function($sce) {
    return function(val) {		
        return $sce.trustAsHtml(val);
    };
})