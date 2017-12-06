// confirm page load
console.log("connection.js is connected");

// import dependencies
var mysql = require("mysql");
var Sequelize = require("sequelize");

//set up SQL connection for Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "cjones01",
    database: "business"
  });
};


// connect to sql database
connection.connect(function(err) {
	if (err) {
		console.log("error connecting to " + err.stack);
		return;
	}
	console.log("Connected to the SQL database as ID: " + connection.threadId); 
});


// export the connections
module.exports = connection;
