const Semester = require("../models/semesterModel");

exports.createSemester = async (req, res) => {
	const semester = new Semester(req.body);
	console.log(req.body);
	await semester.save();
	res.send(semester);
};

exports.getSemesters = async (req, res) => {
	const semester = await Semester.find();
	res.send(semester);
};
