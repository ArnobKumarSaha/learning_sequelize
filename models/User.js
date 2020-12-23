const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {

	"id":{
		type: Sequelize.INTEGER(11),
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	"name":{
		type: Sequelize.STRING(21),
		allowNull: false,
		unique: true,
	},
	"password":{
		type: Sequelize.INTEGER(21),
		allowNull: false,
	}
});