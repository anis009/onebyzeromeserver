const Course = require("../models/courseModel");

exports.getCourses = async (req, res) => {
	const courses = await Course.find();
	res.send(courses);
};
