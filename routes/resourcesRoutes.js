const express = require("express");
const {
	getResources,
	getCountAllResources,
	getRecentAllBooks,
	getRecentAllSlides,
	getRecentAllHandNotes,
	getRecentAllQuestions,
	getTopContributors,
	getRecentAllResources,
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
router.route("/all-recent-resources/:dept").get(getRecentAllResources);
router.route("/top-contributors/:dept").get(getTopContributors);
module.exports = router;
