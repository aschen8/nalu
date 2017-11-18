var Sequelize = require('sequelize');
var connection = new Sequelize('business.sql', 'root', 'password');
var Article = connection.define('article', {
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});
