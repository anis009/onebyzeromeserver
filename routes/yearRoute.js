const express = require("express");
const { createYear, getYears } = require("../controllers/yearControllers");
const router = express.Router();
// /api/examName

router.route("/").post(createYear).get(getYears);

module.exports = router;
