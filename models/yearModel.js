const mongoose = require("mongoose");
const yearSchema = new mongoose.Schema(
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

const Year = mongoose.model("Year", yearSchema);

module.exports = Year;
