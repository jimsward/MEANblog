'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

   var $httpBackend, $rootScope, createController, authRequestHandler;
    it('should be defined', inject(function($controller, $rootScope) {
       var scope = $rootScope.$new()
      var view2Ctrl = $controller('View2Ctrl', { $scope: scope });
      expect(view2Ctrl).toBeDefined();
    }));

  });
});