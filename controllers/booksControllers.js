const { default: mongoose } = require("mongoose");
const Resource = require("../models/resourcesModel");
// @desc Create books
// @route POST /api/contribute/quesions
// @access private
exports.createBooks = async (req, res) => {
	const { courseInfo, books } = req.body;

	try {
		const resource = await Resource.findOne(courseInfo, "books").exec();

		if (resource) {
			resource.books.unshift({
				...books,
				createdAt: new Date(),
				_id: new mongoose.Types.ObjectId().toString(),
				isVerified: false,
			});

			await resource.save();

			return res.send(resource);
		} else {
			const createResource = new Resource(courseInfo);
			createResource.books.unshift({
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
