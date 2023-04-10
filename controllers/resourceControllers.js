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

exports.getRecentAllBooks = async (req, res) => {
	const limit = Number(req?.query?.limit) || 5;
	const department = req.query?.dept || "Computer Science & Engineering";
	const data = await Resource.aggregate([
		{
			$match: { department: department }, // Match documents based on the department field
		},
		{
			$unwind: "$books", // Unwind the books array to treat each book as a separate document
		},
		{
			$sort: { "books.createdDate": -1 }, // Sort the documents in descending order based on createdDate
		},
		{
			$group: {
				_id: null, // Group all documents together since we want to push all books into a single array object
				books: { $push: "$books" }, // Push all books into a single array object
			},
		},
		{
			$project: {
				_id: 0, // Exclude the _id field
				books: {
					$slice: ["$books", limit], // Limit the books array to 3 elements (most recent books)
				},
			},
		},
	]);

	res.send(data[0]);
};
exports.getRecentAllSlides = async (req, res) => {
	const limit = Number(req?.query?.limit) || 5;
	const department = req.query?.dept || "Computer Science & Engineering";
	const data = await Resource.aggregate([
		{
			$match: { department: department }, // Match documents based on the department field
		},
		{
			$unwind: "$slides", // Unwind the books array to treat each book as a separate document
		},
		{
			$sort: { "slides.createdDate": -1 }, // Sort the documents in descending order based on createdDate
		},
		{
			$group: {
				_id: null, // Group all documents together since we want to push all books into a single array object
				slides: { $push: "$slides" }, // Push all books into a single array object
			},
		},
		{
			$project: {
				_id: 0, // Exclude the _id field
				slides: {
					$slice: ["$slides", limit], // Limit the books array to 3 elements (most recent books)
				},
			},
		},
	]);
	res.send(data[0]);
};
exports.getRecentAllHandNotes = async (req, res) => {
	const limit = Number(req?.query?.limit) || 5;
	const department = req.query?.dept || "Computer Science & Engineering";
	const data = await Resource.aggregate([
		{
			$match: { department: department }, // Match documents based on the department field
		},
		{
			$unwind: "$handNotes", // Unwind the books array to treat each book as a separate document
		},
		{
			$sort: { "handNotes.createdDate": -1 }, // Sort the documents in descending order based on createdDate
		},
		{
			$group: {
				_id: null, // Group all documents together since we want to push all books into a single array object
				handNotes: { $push: "$handNotes" }, // Push all books into a single array object
			},
		},
		{
			$project: {
				_id: 0, // Exclude the _id field
				handNotes: {
					$slice: ["$handNotes", limit], // Limit the books array to 3 elements (most recent books)
				},
			},
		},
	]);
	res.send(data[0]);
};
exports.getRecentAllQuestions = async (req, res) => {
	const limit = Number(req?.query?.limit) || 5;
	const department = req.query?.dept || "Computer Science & Engineering";
	try {
		const data = await Resource.find({
			department: department,
		});
		let questions = [];
		data.forEach((resource) => {
			const courseTitle = resource.courseTitle;
			const questionsData = resource.questions;
			questionsData.forEach((question) => {
				questions.push({
					courseTitle: courseTitle,
					...question,
				});
			});
		});
		questions.sort((a, b) => b.createdAt - a.createdAt);
		res.send(questions.slice(0, limit));
	} catch (error) {
		res.status(500).send({
			message: error.message,
		});
	}
};
