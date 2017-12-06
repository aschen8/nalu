// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
console.log("api-routes.js is connected");

// Dependencies
// =============================================================
var express = require('express');
var app = express();
var connection = require('../config/connection.js');
var orm = require('../models/orm-model.js');
// var models = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all products
  app.get('/inventory', function(req, res) {
    console.log("app.get on api-routes has been called from /inventory");
    var dbQuery = "SELECT * FROM products";
    //connection not defined here!
    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });

  });

  app.get('/index', function(req, res) {
  console.log("app.get on api-routes has been called from /index");
  var dbQuery = "SELECT * FROM products";
  //connection not defined here!
  connection.query(dbQuery, function(err, result) {
    if (err) throw err;
    res.json(result);
  });

});


app.post("/inventory", function(req, res) {
        var sku = req.body.sku;
        var product_name = req.body.product_name;
        var category = req.body.category;
        var cost = req.body.cost;
        var price = req.body.price;
        var stock_quantity = req.body.stock_quantity;
        var reorder_quantity = req.body.reorder_quantity;

        var addItemQuery = "INSERT INTO products " + 
        "(sku, product_name, category, cost, price, stock_quantity, reorder_quantity) " +
        "VALUES (" + sku + ", '" + product_name + "', '"
        + category + "', " + cost + ", " + price + ", "
        + stock_quantity + ", " + reorder_quantity + ")"

        console.log(addItemQuery);

        conn.query(addItemQuery, function(err, result) {
            if (err) throw err;
            console.log("New item added.");
        });

        res.redirect("/inventory");
    });

}
