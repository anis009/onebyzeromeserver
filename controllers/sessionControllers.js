const Session = require("../models/sessionModel");

exports.createSession = async (req, res) => {
	try {
		const session = new Session(req.body);
		await session.save();
		res.send(session);
	} catch (error) {
		res.send(error.message);
	}
};

exports.getSession = async (req, res) => {
	try {
		const sessions = await Session.find();
		res.send(sessions);
	} catch (error) {}
};

exports.getSessionByValue = async (req, res) => {
	const value = Number(req.params.id);
	try {
		const query = {
			value: value,
		};
		const session = await Session.findOne(query).exec();
		res.send(session);
	} catch (error) {
		res.send(error);
	}
};
