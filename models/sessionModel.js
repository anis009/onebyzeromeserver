const mongoose = require("mongoose");
const sessionSchema = new mongoose.Schema(
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

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
