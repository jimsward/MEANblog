'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/You are not logged in/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });

    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/You are not logged in/);
    });

  });
  describe('view3', function() {
    beforeEach(function() {
      browser.get('index.html#/view3');
    });

    it('should render view3 when user navigates to /view3', function() {
     expect(element(by.id('newpost')).isDisplayed()).toBe(true);
    });

  });
    describe('view4', function() {
    beforeEach(function() {
      browser.get('index.html#/view4');
    });

    it('should render view4 when user navigates to /view4', function() {
     expect(element(by.id('approvetable')).isDisplayed()).toBe(true);
    });

  });
   describe('view5', function() {
    beforeEach(function() {
      browser.get('index.html#/view5');
    });
    it('should display - No such user - when invalid user name is input', function() {
		 element(by.model('username')).sendKeys("xyzw");
		 element(by.id('submitlogin')).click();
     expect(element(by.binding('login_error')).getText()).toEqual("No such user");
   });
  });
     describe('view6', function() {
    beforeEach(function() {
      browser.get('index.html#/view6');
    });
    it('should redirect to view1 when clicked on first anchor', function() {
		
		 element.all(by.tagName('a')).first().click();
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
   });
  });
   describe('view7', function() {
    beforeEach(function() {
      browser.get('index.html#/view7');
    });
    it('should display - Username already in use - when duplicate user name is input', function() {
		 element(by.model('username')).sendKeys("nnn");
		 element(by.model('password')).sendKeys("nnn");
		 element(by.model('verify')).sendKeys("nnn");
		 element(by.model('email')).sendKeys("jim@guerneville-guys.com");		 
		 element(by.id('submitsignup')).click();
     expect(element(by.binding('username_error')).getText()).toMatch(/Username already/);
   });
  });
  
   describe('view10', function() {
    beforeEach(function() {
      browser.get('index.html#/view10');
    });
    it('should spawn an alert', function() {
		 element(by.model('contact.name')).sendKeys("albert");
		 element(by.model('contact.email')).sendKeys("albert@albert.com");
		 element(by.model('contact.message')).sendKeys("message");
				 
		 element(by.id('submitmessage')).click();
		 expect(browser.getLocationAbsUrl()).toMatch("/view1");
   })
   
   });
  describe('view11', function() {
    beforeEach(function() {
      browser.get('index.html#/view11');
    });

    it('should render view12 when user clicks on a post', function() {
		element(by.id('0')).click()
     expect(element(by.id('submitedit')).isDisplayed()).toBe(true);
    });

  });  
   describe('view12', function() {
    beforeEach(function() {
      browser.get('index.html#/view12');
    });

    it('should redirect to view1 when user clicks submit', function() {
		element(by.id('submitedit')).click();
 expect(browser.getLocationAbsUrl()).toMatch("/view1");
     });

  });  
  
});
