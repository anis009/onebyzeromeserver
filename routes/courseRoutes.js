const express = require("express");
const { getCourses } = require("../controllers/courseControllers");

const router = express.Router();
// /api/course

router.route("/").get(getCourses);

module.exports = router;
