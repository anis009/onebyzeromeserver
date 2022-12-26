const express = require("express");
const {
	createSession,
	getSession,
} = require("../controllers/sessionControllers");
const router = express.Router();
// /api/contribute

router.route("/").post(createSession).get(getSession);

module.exports = router;
