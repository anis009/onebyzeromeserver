const express = require("express");
const { createBooks } = require("../controllers/booksControllers");
const { createHandNotes } = require("../controllers/handnotesControllers");
const { createQuestions } = require("../controllers/questionsControllers");
const { createslides } = require("../controllers/slidesControllers");
const router = express.Router();
// /api/contribute

router.route("/questions").post(createQuestions);
router.route("/books").post(createBooks);
router.route("/slides").post(createslides);
router.route("/handnotes").post(createHandNotes);

module.exports = router;
