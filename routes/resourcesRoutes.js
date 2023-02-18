const express = require("express");
const { getResources } = require("../controllers/resourceControllers");
const { auth } = require("../middlewares/authMiddleWare");
const router = express.Router();
// /api/resources

router.route("/profile").get(auth, getResources);

module.exports = router;
