var express = require('express')
  , app = express() // Web framework to handle routing requests
  , path = require('path')
  , cons = require('consolidate') // Templating library adapter for Express
  , MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
  , routes = require('./routes') // Routes for our application
  , cookieParser = require( 'cookie-parser' )
  , bodyParser = require( 'body-parser' )

//MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
//new mongolab connection
var uri = process.env.MONGOLAB_URI || process.argv[2]
	MongoClient.connect( uri, function(err, db) {
    "use strict";
    if(err) throw err;
	var port = process.env.PORT || 8080;
    // Register our templating engine
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    // Express middleware to populate 'req.cookies' so we can access cookies
    app.use(cookieParser());

    // Express middleware to populate 'req.body' so we can access POST variables
    app.use(bodyParser());
	app.use(express.static(path.join(__dirname, 'public')));
    // Application routes
    routes(app, db);

    app.listen(port);
    console.log('Express server listening on port 8080');
});
