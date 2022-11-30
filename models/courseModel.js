const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
	{
		varsity: {
			type: String,
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		semester: {
			type: Number,
			required: true,
		},
		department: {
			type: String,
			required: true,
		},
		courses: [],
	},
	{
		timestamps: true,
	}
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
