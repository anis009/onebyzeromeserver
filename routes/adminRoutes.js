const express = require("express");
const { createResourceTemplate } = require("../controllers/adminControllers");
const router = express.Router();
// /api/admin

router.route("/createCourseTemplate").post(createResourceTemplate);

module.exports = router;
