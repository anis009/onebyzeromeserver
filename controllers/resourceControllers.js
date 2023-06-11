const Resource = require("../models/resourcesModel");
const User = require("../models/userModel");

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
	// const data = await Resource.aggregate([
	// 	{
	// 		$match: { department: department }, // Match documents based on the department field
	// 	},
	// 	{
	// 		$unwind: "$books", // Unwind the books array to treat each book as a separate document
	// 	},
	// 	{
	// 		$sort: { "books.createdDate": -1 }, // Sort the documents in descending order based on createdDate
	// 	},
	// 	{
	// 		$group: {
	// 			_id: null, // Group all documents together since we want to push all books into a single array object
	// 			books: { $push: "$books" }, // Push all books into a single array object
	// 		},
	// 	},
	// 	{
	// 		$project: {
	// 			_id: 0, // Exclude the _id field
	// 			books: {
	// 				$slice: ["$books", limit], // Limit the books array to 3 elements (most recent books)
	// 			},
	// 		},
	// 	},
	// ]);
	try {
		const resources = await Resource.find({
			department: department,
		});
		let books = [];
		resources.forEach((resource) => {
			const semester = resource?.semester;
			const year = resource?.year;
			const _id = resource?._id;
			resource?.books.map((book) => {
				books.push({
					courseId: _id,
					semester,
					year,
					...book,
				});
			});
		});
		books.sort((a, b) => b.createdAt - a.createdAt);
		res.send(books.slice(0, limit));
	} catch (error) {
		res.status(500).send({
			message: "Something Went Wrong.",
		});
	}
};
exports.getRecentAllSlides = async (req, res) => {
	const limit = Number(req?.query?.limit) || 5;
	const department = req.query?.dept || "Computer Science & Engineering";
	// const data = await Resource.aggregate([
	// 	{
	// 		$match: { department: department }, // Match documents based on the department field
	// 	},
	// 	{
	// 		$unwind: "$slides", // Unwind the books array to treat each book as a separate document
	// 	},
	// 	{
	// 		$sort: { "slides.createdDate": -1 }, // Sort the documents in descending order based on createdDate
	// 	},
	// 	{
	// 		$group: {
	// 			_id: null, // Group all documents together since we want to push all books into a single array object
	// 			slides: { $push: "$slides" }, // Push all books into a single array object
	// 		},
	// 	},
	// 	{
	// 		$project: {
	// 			_id: 0, // Exclude the _id field
	// 			slides: {
	// 				$slice: ["$slides", limit], // Limit the books array to 3 elements (most recent books)
	// 			},
	// 		},
	// 	},
	// ]);
	try {
		const resources = await Resource.find({
			department: department,
		});
		let slides = [];
		resources.forEach((resource) => {
			const semester = resource?.semester;
			const year = resource?.year;
			const _id = resource?._id;
			resource?.slides.map((slide) => {
				slides.push({
					courseId: _id,
					semester,
					year,
					...slide,
				});
			});
		});
		slides.sort((a, b) => b.createdAt - a.createdAt);
		res.send(slides.slice(0, limit));
	} catch (error) {
		res.status(500).send({
			message: "Something Went Wrong.",
		});
	}
};
exports.getRecentAllHandNotes = async (req, res) => {
	const limit = Number(req?.query?.limit) || 5;
	const department = req.query?.dept || "Computer Science & Engineering";
	// const data = await Resource.aggregate([
	// 	{
	// 		$match: { department: department }, // Match documents based on the department field
	// 	},
	// 	{
	// 		$unwind: "$handNotes", // Unwind the books array to treat each book as a separate document
	// 	},
	// 	{
	// 		$sort: { "handNotes.createdDate": -1 }, // Sort the documents in descending order based on createdDate
	// 	},
	// 	{
	// 		$group: {
	// 			_id: null, // Group all documents together since we want to push all books into a single array object
	// 			handNotes: { $push: "$handNotes" }, // Push all books into a single array object
	// 		},
	// 	},
	// 	{
	// 		$project: {
	// 			_id: 0, // Exclude the _id field
	// 			handNotes: {
	// 				$slice: ["$handNotes", limit], // Limit the books array to 3 elements (most recent books)
	// 			},
	// 		},
	// 	},
	// ]);

	try {
		const resources = await Resource.find({
			department: department,
		});
		let notes = [];
		resources.forEach((resource) => {
			const semester = resource?.semester;
			const year = resource?.year;
			const _id = resource?._id;
			resource?.handNotes.map((note) => {
				notes.push({
					courseId: _id,
					semester,
					year,
					...note,
				});
			});
		});
		notes.sort((a, b) => b.createdAt - a.createdAt);
		res.send(notes.slice(0, limit));
	} catch (error) {
		res.status(500).send({
			message: "Something Went Wrong.",
		});
	}
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
exports.getTopContributors = async (req, res) => {
	const dept = req.params.dept || "Computer Science & Engineering";
	try {
		const handNotes = await Resource.aggregate([
			{
				$unwind: "$handNotes",
			},
			{
				$match: {
					department: dept,
					"handNotes.createdAt": {
						$gte: new Date("2023-02-22"),
					},
				},
			},
			{
				$group: {
					_id: "$handNotes.email",
					totalHandNotes: {
						$sum: 1,
					},
				},
			},
			{
				$project: {
					_id: 0,
					email: "$_id",
					totalHandNotes: 1,
				},
			},
			{
				$sort: {
					totalHandNotes: -1,
				},
			},
		]);

		const slides = await Resource.aggregate([
			{
				$unwind: "$slides",
			},
			{
				$match: {
					department: dept,
					"slides.createdAt": {
						$gte: new Date("2023-02-22"),
					},
				},
			},
			{
				$group: {
					_id: "$slides.email",
					totalSlides: {
						$sum: 1,
					},
				},
			},
			{
				$project: {
					_id: 0,
					email: "$_id",
					totalSlides: 1,
				},
			},
			{
				$sort: {
					totalSlides: -1,
				},
			},
		]);

		const books = await Resource.aggregate([
			{
				$unwind: "$books",
			},
			{
				$match: {
					department: dept,
					"books.createdAt": {
						$gte: new Date("2023-02-22"),
					},
				},
			},
			{
				$group: {
					_id: "$books.email",
					totalBooks: {
						$sum: 1,
					},
				},
			},
			{
				$project: {
					_id: 0,
					email: "$_id",
					totalBooks: 1,
				},
			},
			{
				$sort: {
					totalBooks: -1,
				},
			},
		]);
		const questions = await Resource.aggregate([
			{
				$unwind: "$questions",
			},
			{
				$match: {
					department: dept,
					"questions.createdAt": {
						$gte: new Date("2023-02-22"),
					},
				},
			},
			{
				$group: {
					_id: "$questions.email",
					totalQuestions: {
						$sum: 1,
					},
				},
			},
			{
				$project: {
					_id: 0,
					email: "$_id",
					totalQuestions: 1,
				},
			},

			{
				$sort: {
					totalQuestions: -1,
				},
			},
		]);

		const users = await User.find().select("email name image");

		let contributors = [];

		users.forEach((user) => {
			let totalPoints = 0;

			const slideIdx = slides.findIndex((slide) => {
				return slide.email === user.email;
			});

			if (slideIdx >= 0) {
				const totalSlides = slides[slideIdx].totalSlides * 3;
				totalPoints += totalSlides;
			}

			const handNoteIdx = handNotes.findIndex(
				({ email }) => email === user.email
			);

			if (handNoteIdx >= 0) {
				const totalHandNotes = handNotes[handNoteIdx].totalHandNotes * 5;
				totalPoints += totalHandNotes;
			}

			const bookIdx = books.findIndex(({ email }) => email === user.email);

			if (bookIdx >= 0) {
				const totalBooks = books[bookIdx].totalBooks * 3;
				totalPoints += totalBooks;
			}

			const questionIdx = questions.findIndex(
				({ email }) => email === user.email
			);

			if (questionIdx >= 0) {
				const totalQuestions = questions[questionIdx].totalQuestions * 3;
				totalPoints += totalQuestions;
			}

			const userPointObj = {
				name: user?.name,
				image: user?.image,
				email: user.email,
				_id: user?._id,
				totalPoints,
			};
			contributors.push(userPointObj);
		});

		contributors.sort((a, b) => b.totalPoints - a.totalPoints);
		res.json({
			contributors,
		});
	} catch (error) {
		res.status(500).send({
			message: error.message,
		});
	}
};

exports.getRecentAllResources = async (req, res) => {
	const dept = req.params.dept || "Computer Science & Engineering";
	try {
		let books = await Resource.aggregate([
			{
				$unwind: "$books",
			},
			{
				$match: {
					department: dept,
				},
			},
			{
				$addFields: {
					"books.resourceId": "$_id",
					"books.department": "$department",
					"books.varsity": "$varsity",
					"books.type": "book",
				},
			},
			{
				$group: {
					_id: null,
					totalBooks: {
						$push: "$books",
					},
				},
			},
			{
				$project: {
					_id: 0,
					totalBooks: 1,
				},
			},
		]);

		let slides = await Resource.aggregate([
			{
				$unwind: "$slides",
			},
			{
				$match: {
					department: dept,
				},
			},
			{
				$addFields: {
					"slides.resourceId": "$_id",
					"slides.department": "$department",
					"slides.varsity": "$varsity",
					"slides.type": "slide",
				},
			},
			{
				$group: {
					_id: null,
					totalSlides: {
						$push: "$slides",
					},
				},
			},
			{
				$project: {
					_id: 0,
					totalSlides: 1,
				},
			},
		]);
		let questions = await Resource.aggregate([
			{
				$unwind: "$questions",
			},
			{
				$match: {
					department: dept,
				},
			},
			{
				$addFields: {
					"questions.resourceId": "$_id",
					"questions.department": "$department",
					"questions.varsity": "$varsity",
					"questions.type": "question",
				},
			},
			{
				$group: {
					_id: null,
					totalQuestions: {
						$push: "$questions",
					},
				},
			},
			{
				$project: {
					_id: 0,
					totalQuestions: 1,
				},
			},
		]);
		let handNotes = await Resource.aggregate([
			{
				$unwind: "$handNotes",
			},
			{
				$match: {
					department: dept,
				},
			},
			{
				$addFields: {
					"handNotes.resourceId": "$_id",
					"handNotes.department": "$department",
					"handNotes.varsity": "$varsity",
					"handNotes.type": "handNote",
				},
			},
			{
				$group: {
					_id: null,
					totalHandNotes: {
						$push: "$handNotes",
					},
				},
			},
			{
				$project: {
					_id: 0,
					totalHandNotes: 1,
				},
			},
		]);

		books = books[0]?.totalBooks;
		slides = slides[0]?.totalSlides;
		questions = questions[0]?.totalQuestions;
		handNotes = handNotes[0]?.totalHandNotes;

		// console.log(books, slides, questions, handNotes);
		let mergedArrays = [];
		if (slides?.length > 0) {
			mergedArrays = [...mergedArrays, ...slides];
		}

		if (questions?.length > 0) {
			mergedArrays = [...mergedArrays, ...questions];
		}

		if (books?.length > 0) {
			mergedArrays = [...mergedArrays, ...books];
		}

		if (handNotes?.length > 0) {
			mergedArrays = [...mergedArrays, ...handNotes];
		}

		mergedArrays.sort((a, b) => b.createdAt - a.createdAt);
		res.json(mergedArrays.slice(0, 100));
	} catch (error) {
		res.status(500).send({
			message: error.message,
		});
	}
};
