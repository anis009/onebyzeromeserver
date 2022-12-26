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
