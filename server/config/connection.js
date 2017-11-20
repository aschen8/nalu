//set up SQL connection
console.log("connection.js is connected");

var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "cjones01",
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