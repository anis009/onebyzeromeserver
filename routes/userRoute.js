const express = require("express");
const {
	createUser,
	getUserByEmail,
} = require("../controllers/userControllers");
const router = express.Router();
// /api/contribute

router.route("/").post(createUser).get(getUserByEmail);

module.exports = router;
