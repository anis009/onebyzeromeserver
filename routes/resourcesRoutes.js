const express = require("express");
const {
	getResources,
	getCountAllResources,
	getRecentAllBooks,
	getRecentAllSlides,
	getRecentAllHandNotes,
	getRecentAllQuestions,
} = require("../controllers/resourceControllers");
const { auth } = require("../middlewares/authMiddleWare");
const router = express.Router();
// /api/resources

router.route("/profile").get(auth, getResources);
router.route("/count").get(getCountAllResources);
router.route("/recent/books").get(getRecentAllBooks);
router.route("/recent/slides").get(getRecentAllSlides);
router.route("/recent/handNotes").get(getRecentAllHandNotes);
router.route("/recent/questions").get(getRecentAllQuestions);

module.exports = router;
