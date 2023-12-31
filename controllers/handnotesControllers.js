const { default: mongoose } = require("mongoose");
const Resource = require("../models/resourcesModel");
// @desc Create books
// @route POST /api/contribute/quesions
// @access private
exports.createHandNotes = async (req, res) => {
	const { courseInfo, books } = req.body;

	try {
		const resource = await Resource.findOne(courseInfo, "handNotes").exec();

		if (resource) {
			resource.handNotes.unshift({
				...books,
				createdAt: new Date(),
				_id: new mongoose.Types.ObjectId().toString(),
				isVerified: false,
			});

			await resource.save();

			return res.send(resource);
		} else {
			const createResource = new Resource(courseInfo);
			createResource.handNotes.unshift({
				...books,
				createdAt: new Date(),
				_id: new mongoose.Types.ObjectId().toString(),
				isVerified: false,
			});
			await createResource.save();
			return res.send(createResource);
		}
	} catch (error) {
		res.send({ message: error.message });
	}
};
