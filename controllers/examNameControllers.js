const ExamName = require("../models/examNameModel");

exports.createExamName = async (req, res) => {
	try {
		const examName = new ExamName(req.body);
		await examName.save();
		res.send(examName);
	} catch (error) {
		res.send(error.message);
	}
};

exports.getExamName = async (req, res) => {
	try {
		const examNames = await ExamName.find();
		res.send(examNames);
	} catch (error) {}
};
