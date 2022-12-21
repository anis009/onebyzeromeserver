const mongoose = require("mongoose");
const semesterSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		value: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Semester = mongoose.model("Semester", semesterSchema);

module.exports = Semester;
