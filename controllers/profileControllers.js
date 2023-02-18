const Resource = require("../models/resourcesModel");

// @desc get resources
// @route get /api/resources/
// @access private

exports.getResources = async (req, res) => {
	const email = "anis.cse5.bu@gmail.com";
	const resources = await Resource.aggregate([
		{
			$project: {
				slides: {
					$input: "$slides",
					cond: {
						"$$slide.email": email,
					},
					as: "slide",
				},
			},
		},
	]);

	res.send(resources);
};
