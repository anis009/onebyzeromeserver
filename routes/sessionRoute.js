const express = require("express");
const { createSession } = require("../controllers/sessionControllers");
const router = express.Router();
// /api/contribute

router.route("/").post(createSession);

module.exports = router;
