const express = require("express");
const {
	getResources,
	getCountAllResources,
} = require("../controllers/resourceControllers");
const { auth } = require("../middlewares/authMiddleWare");
const router = express.Router();
// /api/resources

router.route("/profile").get(auth, getResources);
router.route("/count").get(getCountAllResources);

module.exports = router;
