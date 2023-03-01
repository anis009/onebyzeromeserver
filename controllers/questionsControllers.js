const { default: mongoose } = require("mongoose");
const Resource = require("../models/resourcesModel");
// @desc Create Questions
// @route POST /api/contribute/questions
// @access private

exports.createQuestions = async (req, res) => {
	const { courseInfo, questions } = req.body;
	console.log(questions);

	try {
		const resource = await Resource.findOne(courseInfo, "questions").exec();

		if (resource) {
			resource.questions.unshift({
				...questions,
				createdAt: new Date(),
				_id: new mongoose.Types.ObjectId().toString(),
				isVarified: false,
			});

			await resource.save();

			return res.send(resource);
		} else {
			const createResource = new Resource(courseInfo);
			createResource.questions.unshift({
				...questions,
				createdAt: new Date(),
				_id: new mongoose.Types.ObjectId().toString(),
				isVarified: false,
			});
			await createResource.save();
			return res.send(createResource);
		}
	} catch (error) {
		res.send({ message: error.message });
	}
};

exports.updateQuestions = async (req, res) => {
	const data = req.body;
	const { _id, courseId, examName, session, link } = data;
	console.log(data);
	try {
		const resource = await Resource.update(
			{
				_id: new mongoose.Types.ObjectId(courseId),
				"questions._id": new mongoose.Types.ObjectId(_id).toString(),
			},
			{
				$set: {
					"questions.$.examName": examName,
					"questions.$.session": session,
					"questions.$.link": link,
				},
			}
		);
		res.send(resource);
	} catch (error) {
		res.send(error);
	}
};

exports.deleteQuestions = async (req, res) => {
	const courseId = req.query.courseId;
	const questionId = req.query.questionId;
	const link = req.query?.link;
	try {
		// TODO:: DELETE FILE
		if (!link.includes("i.ibb.co")) {
			fs.unlink(`./${imageUrl}`, (err) => {
				if (err) {
					console.error(err);
				}
			});
		}
		const result = await Resource.update(
			{
				_id: new mongoose.Types.ObjectId(courseId),
			},
			{
				$pull: {
					questions: {
						_id: new mongoose.Types.ObjectId(questionId).toString(),
					},
				},
			}
		);
		res.send(result);
	} catch (err) {
		console.log(err);
	}
};
