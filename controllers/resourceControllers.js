const Resource = require("../models/resourcesModel");

exports.getResources = async (req, res) => {
	const email = req?.query?.email;
	try {
		const resources = await Resource.aggregate([
			{
				$match: {
					$or: [
						{
							books: {
								$elemMatch: {
									email: email,
								},
							},
						},
						{
							slides: {
								$elemMatch: {
									email: email, // specify the email address to match
								},
							},
						},
						{
							questions: {
								$elemMatch: {
									email: email,
								},
							},
						},
						{
							handNotes: {
								$elemMatch: {
									email: email,
								},
							},
						},
					],
				},
			},
			{
				$project: {
					courseTitle: 1,
					varsity: 1,
					department: 1,
					slides: {
						$filter: {
							input: "$slides",
							as: "slide",
							cond: { $eq: ["$$slide.email", email] },
						},
					},
					books: {
						$filter: {
							input: "$books",
							as: "book",
							cond: {
								$eq: ["$$book.email", email],
							},
						},
					},
					questions: {
						$filter: {
							input: "$questions",
							as: "question",
							cond: {
								$eq: ["$$question.email", email],
							},
						},
					},
					handNotes: {
						$filter: {
							input: "$handNotes",
							as: "handNote",
							cond: {
								$eq: ["$$handNote.email", email],
							},
						},
					},
				},
			},
		]);
		res.send(resources);
	} catch (error) {
		res.status(500).send({
			message: "something went wrong",
		});
	}
};

exports.getCountAllResources = async (req, res) => {
	try {
		const countsProperty = await Resource.aggregate([
			{
				$project: {
					books: {
						$size: "$books",
					},
					slides: {
						$size: "$slides",
					},
					handNotes: {
						$size: "$handNotes",
					},
					questions: {
						$size: "$questions",
					},
				},
			},
		]);
		res.send(countsProperty);
	} catch (error) {
		console.log(error);
		res.status(500).send({
			message: "Something Went Wrong!",
		});
	}
};
