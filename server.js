// *********************************************************************************
// Server.js - This file is the initial starting point for Nalu's Node/Express server.
// *********************************************************************************
console.log("starting server.js");

// Dependencies
// =============================================================
var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
// var models = require("./server/models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("./client/public"));

// Routes
// =============================================================
require("./server/controllers/api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
// models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });