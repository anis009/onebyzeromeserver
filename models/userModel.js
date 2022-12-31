const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			default: +880000,
		},
		userRole: {
			type: String,
			default: "user",
		},
		isRestricted: {
			type: Boolean,
			default: false,
		},
		point: {
			type: Number,
			default: 0,
		},
		isVarified: {
			type: Boolean,
			default: false,
		},
		university: String,
		image: {
			type: String,
			default: "https://i.ibb.co/fp92Ldr/icons8-person-90.png",
		},
		department: String,
		school: String,
		gender: String,
		dateOfBirth: Date,
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
