const User = require("../models/userModel");

exports.createUser = async (req, res) => {
	try {
		const existUser = await User.findOne({ email: req?.body?.email }).exec();
		if (!existUser) {
			const user = new User(req.body);
			await user.save();
			return res.send(user);
		}
		res.send(existUser);
	} catch (err) {
		res.send({
			message: err.message,
		});
	}
};

exports.getUserByEmail = async (req, res) => {
	const email = req?.query?.email;
	try {
		const user = await User.findOne({ email: email }).exec();
		if (!user) {
			throw new Error("User not Found");
		}
		res.send(user);
	} catch (error) {
		res.send({
			message: error.message,
		});
	}
};

exports.getAllUsers = async (req, res) => {
	const query = {};
	try {
		const users = await User.find(query).sort({ createdAt: -1 });
		res.send(users);
	} catch (err) {
		res.status(500).send({
			message: err.message,
		});
	}
};
