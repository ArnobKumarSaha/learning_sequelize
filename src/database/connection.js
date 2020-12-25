const Sequelize = require("sequelize");

const sequelize = new Sequelize("socialnetwork","root","",{
	host: "localhost",
	dialect: "mysql",
	operatorAliases: false
});

const connection_checker = async() =>{
	try {
	  await sequelize.authenticate();
	  console.log('Connection has been established successfully.');
	} catch (error) {
	  console.error('Unable to connect to the database:', error);
	}
}



module.exports = {
	connection_checker,
	sequelize,
}
global.sequelize = sequelize;

