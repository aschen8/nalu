//set up SQL connection
var sql = require('mysql');

var connection = mysql.createconnection({
	port: 3306,
	host: "localhost",
	user: "root"
	password:
	database:
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