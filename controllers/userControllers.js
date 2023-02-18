const User = require("../models/userModel");
const { generateToken } = require("../utils/generateAuthToken");

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

exports.addAsModerator = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findOne({ _id: id });
		if (!user) {
			return res.status(404).send({
				message: "User is not exist",
			});
		}
		user.userRole = "moderator";
		await user.save();
		res.send(user);
	} catch (err) {
		res.status(500).send({
			message: err.message,
		});
	}
};

exports.getToken = async (req, res) => {
	const email = req.query?.email;
	const token = await generateToken(email);
	res.send({ token });
};
