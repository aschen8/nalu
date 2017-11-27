// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
console.log("api-routes.js is connected");

// Dependencies
// =============================================================
//var connection = require("../config/connection.js");
var express = require('express');
var app = express();
var connection = require('../config/connection.js');
//requiring server.js for mysql route
// var connection = require('../server.js');

// Routes
// =============================================================
module.exports = function(app) {

  // Get all products
  app.get('/inventory', function(req, res) {

    var dbQuery = "SELECT * FROM products";
    //connection not defined here!
    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });

  });

  // app.post("/new", function(req, res) {
  //   console.log("Business Data:");
  //   console.log(req.body);
  //   var dbQuery = "INSERT INTO products (ItemID, product_name, sku, category_name, price, stock_quantity) VALUES (?,?,?)";
  //   connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
  //     console.log("Inventory Successfully Saved!");
  //     res.end();
  //   });
  // });

};
