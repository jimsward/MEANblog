var express = require('express')
  , app = express() // Web framework to handle routing requests
  , path = require('path')
  , cons = require('consolidate') // Templating library adapter for Express
  , MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
  , routes = require('./routes') // Routes for our application
  , cookieParser = require( 'cookie-parser' )
  , bodyParser = require( 'body-parser' )

//MongoClient.connect('mongodb://jimsward:polello1@ds045757.mongolab.com:45757/checking', function(err, db) {
//MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
//new mongolab connection
	MongoClient.connect('mongodb://heroku_v0znwk08:ob26stp5kamtac2qkm78uhqhm7@ds037145.mongolab.com:37145/heroku_v0znwk08', function(err, db) {
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
