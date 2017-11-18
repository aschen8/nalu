// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var connection = require("../config/businessManager.js");
// Routes
// =============================================================
module.exports = function(app) {
  // Get all inventory
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM business";
    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });
  });

  app.post("/api/new", function(req, res) {
    console.log("Business Data:");
    console.log(req.body);
    var dbQuery = "INSERT INTO business (ItemID, product_name, sku, category_name, price, stock_quantity) VALUES (?,?,?)";
    connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
      console.log("Inventory Successfully Saved!");
      res.end();
    });
  });
};
