var Sequelize = require('sequelize');

//database business.sql
var connection = new Sequelize('business.sql', 'root', 'password', {
	dialect: 'mysql'




//setting up the connection object. Takes the name of the model,
//in this case 'article'
//not sure if we need this section (used to insert to mysql)
var Article = connection.define('article', {

//setting up object with properties of the model
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});


//bringing data FROM mysql
connection.sync().then(function () {
//findby ID of desired data from mysql
	Article.findbyId().then(function(article){
		console.log(articles.dataValues);
	});
});
