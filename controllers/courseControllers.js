const Course = require("../models/courseModel");

exports.getCourses = async (req, res) => {
	const courses = await Course.find().sort({ year: 1, semester: 1 });
	res.send(courses);
};
