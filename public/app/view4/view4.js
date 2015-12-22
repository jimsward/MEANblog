'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', [ '$routeParams', '$scope', '$http', '$route', function( $routeParams, $scope, $http, $route ) {
	var comments = []
					$http.get( '/posts' ).then( function( response ){						
						angular.forEach( response.data, function( value, key ){//posts
							
							angular.forEach(value.comments, function( item, index ){//comments
							if (item)
							{
								item.permalink = value.permalink
								item.comment_ordinal = index
								comments.push( item )	
							}
								})
							})
							$scope.comments = comments							
						})//GET
	$scope.applyApprove =function(){
		
		var approved = []
		angular.forEach( $scope.comments, function( value, key ){
			if ( value.approved ) approved.push( value )
			} )
			$http.post( '/approved', approved ).success( function( result ){
				console.dir(approved)
				alert('POSTED')
				})
		}					
}]);