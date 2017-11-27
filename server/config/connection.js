//set up SQL connection
console.log("connection.js is connected");

var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",	
	port: 3306,
	user: "root",
	password: "",
	database: "business"
});

// connect to database
connection.connect(function(err) {
	if (err) {
		console.log("error connecting to " + err.stack);
		return;
	}
	console.log("Connected to the SQL database as ID: " + connection.threadId); 
});

// export the connection
module.exports = connection;