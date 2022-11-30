const mongoose = require("mongoose");
const resourceSchema = new mongoose.Schema(
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
		courseCode: {
			type: String,
		},
		courseTitle: {
			type: String,
		},
		creditHours: {
			type: String,
		},
		courseTeachers: [],
		syllabus: {
			type: String,
		},
		books: [],
		slides: [],
		questions: [],
		handNotes: [],
		discussion: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
