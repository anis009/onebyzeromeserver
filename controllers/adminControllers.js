const Resource = require("../models/resourcesModel");

exports.createResourceTemplate = async (req, res) => {
	const { courseInfo, courseCode, courseTeachers, syllabus, creditHours } =
		req.body;

	try {
		const existResource = await Resource.findOne(courseInfo).exec();
		if (existResource) {
			existResource.varsity = courseInfo?.varsity || existResource.varsity;
			existResource.year = courseInfo?.year || existResource.year;
			existResource.semester = courseInfo?.semester || existResource.semester;
			existResource.department =
				courseInfo?.department || existResource.department;
			existResource.courseTitle =
				courseInfo?.courseTitle || existResource.courseTitle;
			existResource.courseCode = courseCode || existResource.courseCode;
			existResource.creditHours = creditHours || existResource.creditHours;
			existResource.syllabus = syllabus || existResource.syllabus;
			if (courseTeachers !== undefined) {
				existResource.courseTeachers.unshift(courseTeachers);
			}
			await existResource.save();
			res.send(existResource);
		} else {
			const createResource = new Resource({
				...courseInfo,
				courseCode,
				syllabus,
				creditHours,
			});
			if (courseTeachers !== undefined) {
				createResource.courseTeachers.unshift(courseTeachers);
			}
			await createResource.save();
			res.send(createResource);
		}
	} catch (error) {
		res.send(error.message);
	}
};
