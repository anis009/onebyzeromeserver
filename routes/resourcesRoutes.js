const express = require("express");
const { getResources } = require("../controllers/resourceControllers");
const router = express.Router();
// /api/resources

router.route("/profile").get(getResources);

module.exports = router;
