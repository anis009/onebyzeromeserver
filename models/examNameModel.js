const mongoose = require("mongoose");
const examNameSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const ExamName = mongoose.model("ExamName", examNameSchema);

module.exports = ExamName;
