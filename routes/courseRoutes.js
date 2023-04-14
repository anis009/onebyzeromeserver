const express = require("express");
const { getCourses } = require("../controllers/courseControllers");

const router = express.Router();
// /api/courses

router.route("/").post(getCourses);

module.exports = router;
