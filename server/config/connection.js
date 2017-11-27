// confirm page load
console.log("connection.js is connected");

// import dependencies
var mysql = require("mysql");
var Sequelize = require("sequelize");


//set up SQL connection
var connection = mysql.createConnection({
	host: "localhost",	
	port: 3306,
	user: "root",
	password: "cjones01",
	database: "business"
});

// connect to sql database
connection.connect(function(err) {
	if (err) {
		console.log("error connecting to " + err.stack);
		return;
	}
	console.log("Connected to the SQL database as ID: " + connection.threadId); 
});



// Set up sequelize connection;
var sequelize = new Sequelize('business', 'root', 'cjones01', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});


//Checking sequelize connection status
sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize connection has been established successfully.');
  })
  .catch(err => {
    console.error('Sequelize is unable to connect to the database:', err);
  });


// export the connections
module.exports = connection;
module.exports = sequelize;