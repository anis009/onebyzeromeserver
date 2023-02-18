const express = require("express");
const {
	createUser,
	getUserByEmail,
	getAllUsers,
	addAsModerator,
	getToken,
} = require("../controllers/userControllers");
const router = express.Router();
// /api/user/
router.route("/").post(createUser).get(getUserByEmail);
router.route("/all").get(getAllUsers);
router.route("/addasmoderator/:id").put(addAsModerator);
router.route("/jwt").get(getToken);

module.exports = router;
