const { default: mongoose } = require("mongoose");
const Resource = require("../models/resourcesModel");
// @desc Create Questions
// @route POST /api/contribute/quesions
// @access private
exports.createQuestions = async (req, res) => {
	const { courseInfo, questions } = req.body;
	console.log(questions);

	try {
		const resource = await Resource.findOne(courseInfo, "questions").exec();

		if (resource) {
			resource.questions.push({
				...questions,
				createdAt: new Date(),
				_id: new mongoose.Types.ObjectId().toString(),
				isVarified: false,
			});

			await resource.save();

			return res.send(resource);
		} else {
			const createResource = new Resource(courseInfo);
			createResource.questions.push({
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
