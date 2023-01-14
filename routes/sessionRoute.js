const express = require("express");
const {
	createSession,
	getSession,
	getSessionByValue,
} = require("../controllers/sessionControllers");
const router = express.Router();
// /api/contribute

router.route("/").post(createSession).get(getSession);
router.route("/:id").get(getSessionByValue);

module.exports = router;
