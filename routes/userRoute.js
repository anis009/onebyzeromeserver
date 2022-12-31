const express = require("express");
const {
	createUser,
	getUserByEmail,
	getAllUsers,
} = require("../controllers/userControllers");
const router = express.Router();
// /api/contribute

router.route("/").post(createUser).get(getUserByEmail);
router.route("/all").get(getAllUsers);

module.exports = router;
