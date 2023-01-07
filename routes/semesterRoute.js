const express = require("express");
const {
	createSemester,
	getSemesters,
} = require("../controllers/semesterControllers");

const router = express.Router();
// /api/examName

router.route("/").post(createSemester).get(getSemesters);

module.exports = router;
