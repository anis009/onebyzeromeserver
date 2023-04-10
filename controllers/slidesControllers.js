const { default: mongoose } = require("mongoose");
const Resource = require("../models/resourcesModel");
// @desc Create slides
// @route POST /api/contribute/quesions
// @access private
exports.createslides = async (req, res) => {
	const { courseInfo, books } = req.body;

	try {
		const resource = await Resource.findOne(courseInfo, "slides").exec();

		if (resource) {
			resource.slides.unshift({
				...books,
				createdAt: new Date(),
				_id: new mongoose.Types.ObjectId().toString(),
				isVerified: false,
			});

			await resource.save();

			return res.send(resource);
		} else {
			const createResource = new Resource(courseInfo);
			createResource.slides.unshift({
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
