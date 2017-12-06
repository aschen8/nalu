console.log("The ORM is running!");

// import the mySQL connection from config
var connection = require('./connection.js');

// SQL statement functions.
function getData (data) {
  var arr = [];
  for (var i = 0; i < data; i++) {
    arr.push("?");
  }
  return arr.toString();
}
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    if (ob[key]) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

var orm = {

  all: function (cb) {
    var queryString = "SELECT * FROM products";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
  }

};

// Export the orm object
module.exports = orm;