const express = require("express");
const {
	createExamName,
	getExamName,
} = require("../controllers/examNameControllers");
const router = express.Router();
// /api/examName

router.route("/").post(createExamName).get(getExamName);

module.exports = router;
