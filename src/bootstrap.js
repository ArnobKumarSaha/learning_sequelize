module.exports = async() =>{

	const Tweet = require("F://Development/learning_sequelize/models/Tweet");
	const User = require("F://Development/learning_sequelize/models/User");

	
	User.hasMany(Tweet, {
		as: "Tweets",
		foreignKey: "userId"
	});

	Tweet.belongsTo(User, {
		as: "User",
		foreignKey: "userId"
	});

	const errHandler = (err) => {
		console.log("Error : ", err);
	}

	const user = await User.create({
		name: "ali ahmed tonoy",
		password: "13t44gf"
	}).catch(errHandler);

	const tweet = await Tweet.create({
		content: "Lets tweet ! ",
		userId: user.id
	}).catch(errHandler);

	const users = await User.findAll({
		where: {name: "ali ahmed tonoy"},
		include: [{model:Tweet, as:"Tweets"}]
	}).catch(errHandler);

	console.log("Hunny bunny tweets : ", JSON.stringify(users));
};