'use strict';

var express = require('express');
var path = require('path');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');
var api = require('./app/api/url-shortener.js');

var app = express();
mongo.MongoClient.connect(process.env.DB_URL, function(err, db) { // connects to MongoDB using url (first argument)
  // db is the initialized db object
  if (err) {
    throw new Error('Database failed to connect!');
  } else {
    console.log('Successfully connected to MongoDB on port 27017.');
  }

  app.set('views', path.join(__dirname, 'views')); // assigns <path>/views to views 

  db.createCollection("sites", {
    capped: true,
    size: 5242880,
    max: 5000
  }); // creates collection called sites that is capped to 5.24 Mb 5000 documents

  routes(app, db);
  api(app, db);

  var port = process.env.PORT || 8080;
  app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
  });

});