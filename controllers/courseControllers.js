const Course = require("../models/courseModel");

exports.getCourses = async (req, res) => {
	try {
		const courses = await Course.find().sort({ year: 1, semester: 1 });
		res.send(courses);
	} catch (error) {
		res.status(500).send({
			message: "Something went wrong.Try again.",
		});
	}
};
