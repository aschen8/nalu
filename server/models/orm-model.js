console.log("The ORM model is connected");

// import modules and dependencies
var orm = require('../config/orm.js');

// set up ORM models
var products = {
  all: function(cb) {
    orm.all("products", function(res) {
      cb(res);
    });

};

// export the module
module.exports = products;

