'use strict';
angular.module('myApp.view2', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
//this is for the view of an indiviual post
//we should have gotten here with a single argument: permalink of the post  to be shown
.controller('View2Ctrl', [ '$routeParams', '$scope', '$http', '$location', '$timeout', function( $routeParams, $scope, $http, $location, $timeout ) {	
	if ($routeParams.permalink == undefined) $location.path( '/view1' )//no permalink means we somehow got here by mistake
	else
	{
	var permalink = $routeParams.permalink	
	$http.get('/post/' + permalink).then( function( response ){
		var tempArr = []
		var showComments = false
		if (response.data.length) showComments = true
		angular.forEach( response.data.comments, function( value, key ){
			if (value.approved )
			tempArr.push( value )
			} )
		response.data.comments = tempArr
		$scope.post = response.data	
		var html = angular.element('#pbody').text()
		angular.element('#pbody').html(html)
		})
	};		
	$scope.submitLike = function(index){
		var obj = {}
		obj.permalink = $scope.post.permalink
		obj.comment_ordinal = index
		$http.post('/like', obj).then( function(){
			if ($scope.post.comments[index].num_likes == undefined) $scope.post.comments[index].num_likes = 0 
						$scope.post.comments[index].num_likes++			
			})//submitLike		
		}//then
	$scope.submitComment = function(){
		$scope.data.permalink = permalink
		$scope.data.commentDate = new Date()
		$http.post( '/newcomment', $scope.data ).then( function(){
			alert( 'Your comment has been submitted.' )
			} )
		}
	$scope.view1ByTag = function(tag){
		var obj = { 'tag' : tag }
		$location.path( '/view1' ).search( obj )
		}

}])