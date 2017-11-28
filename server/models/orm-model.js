console.log("The ORM model is connected");

// import modules and dependencies
var orm = require('../config/orm.js');

// set up ORM models
var products = {
  all: function(cb) {
    orm.all("products", function(res) {
      cb(res);
    });
  }
  // create: function(name, cb) {
  //   orm.create("products", ["product_name", "category", "sku", "description", "image", "cost", "price", "stock_quantity", "reorder_quantity"], [], cb);
  // },
  // update: function(id, cb) {
  //   var condition = "id=" + id;
  //   orm.update("products", {
  //     devoured: true
  //   }, condition, cb);
  // }
};

// export the module
module.exports = products;

