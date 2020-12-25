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

	console.log("111111111111111111111111111111111111111111111");

	const errHandler = (err) => {
		console.log("Error : ", err);
	}

	const user = await User.create({
		name: "sumit chowdhury",
		password: "13t44gf"
	}).catch(errHandler);

	const tweet = await Tweet.create({
		content: "Lets tweet ! ",
		userId: user.id
	}).catch(errHandler);

	console.log("22222222222222222222222222222222222222222222222222");

	const users = await User.findAll({
		where: {name: "sumit chowdhury"},
		include: [{model:Tweet, as:"Tweets"}]
	}).catch(errHandler);

	console.log("Hunny bunny tweets : ", JSON.stringify(users));
};