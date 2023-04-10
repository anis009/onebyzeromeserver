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
			number: String,
			privacy: {
				type: String,
				default: "public",
			},
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
		isVerified: {
			type: Boolean,
			default: false,
		},
		university: {
			name: String,
			privacy: {
				type: String,
				default: "public",
			},
		},
		image: {
			type: String,
			default: "https://i.ibb.co/fp92Ldr/icons8-person-90.png",
		},
		department: {
			name: String,
			privacy: {
				type: String,
				default: "public",
			},
		},
		school: String,
		gender: {
			value: Date,
			privacy: {
				type: String,
				default: "public",
			},
		},
		dateOfBirth: {
			value: Date,
			privacy: {
				type: String,
				default: "public",
			},
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
