var SessionHandler = require('./session')
  , ContentHandler = require('./content')
  , ErrorHandler = require('./error').errorHandler
  , SendEmail = require('./send')

module.exports = exports = function(app, db) {

    var sessionHandler = new SessionHandler(db);
    var contentHandler = new ContentHandler(db);
	var sendEmail = new SendEmail()
    // Middleware to see if a user is logged in
    app.use(sessionHandler.isLoggedInMiddleware);
	//will redirect to the angular bootstrap page
	app.get('/', contentHandler.displayLayout);
    // The main page of the blog
    app.get('/main', contentHandler.displayMainPage);
	app.get('/posts', contentHandler.getPosts);
	app.post( '/approved', contentHandler.approvedComments )


    // The main page of the blog, filtered by tag
    app.get('/tag/:tag', contentHandler.displayMainPageByTag);

    // A single post, which can be commented on
    app.get("/post/:permalink", contentHandler.getPost);
    app.post('/newcomment', contentHandler.handleNewComment);
    app.get("/post_not_found", contentHandler.displayPostNotFound);

    // Displays the form allowing a user to add a new post. Only works for logged in users
    app.get('/newpost', contentHandler.displayNewPostPage);
    app.post('/newpost', contentHandler.handleNewPost);

    // Used to process a like on a blog post
    app.post('/like', contentHandler.handleLike);

    // Login form
    app.get('/login', sessionHandler.displayLoginPage);
    app.post('/login', sessionHandler.handleLoginRequest);

    // Logout page
    app.get('/logout', sessionHandler.displayLogoutPage);

    // Welcome page
    app.get("/welcome", sessionHandler.displayWelcomePage);

    // Signup form
    app.get('/signup', sessionHandler.displaySignupPage);
    app.post('/signup', sessionHandler.handleSignup);
	
	app.post('/contact', contentHandler.contactForm)
	console.dir(SendEmail)
	app.post('/sendemail', sendEmail.send)

    // Error handling middleware
    app.use(ErrorHandler);
}
