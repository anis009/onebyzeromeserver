const Year = require("../models/yearModel");

exports.createYear = async (req, res) => {
	const year = new Year(req.body);
	// console.log(req.body);
	await year.save();
	res.send(year);
};

exports.getYears = async (req, res) => {
	const year = await Year.find();
	res.send(year);
};
