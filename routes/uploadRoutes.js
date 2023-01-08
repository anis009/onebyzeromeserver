const multer = require("multer");
const express = require("express");
const path = require("path");
const router = express.Router();

// uploadPdf
const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads/pdf");
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.originalname
				.trim()
				.replace(/\s+/g, "-")
				.substring(
					0,
					file.originalname.length - 4
				)}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

function checkFileType(req, file, cb) {
	const filetypes = /pdf/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);
	const fileSize = parseInt(req.headers["content-length"]);
	if (extname && mimetype && fileSize < 31457280) {
		return cb(null, true);
	} else {
		cb("File should be less than 50mb");
	}
}

const upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		checkFileType(req, file, cb);
	},
});

router.route("/pdf").post(upload.single("file"), function (req, res) {
	try {
		res.send(`/${req.file.path}`);
	} catch (error) {
		res.send(error.message);
	}
});

const storageThumbnail = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads/thumbnail");
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.originalname
				.trim()
				.replace(/\s+/g, "-")
				.substring(
					0,
					file.originalname.length - 4
				)}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

function checkFileTypeThumbnail(req, file, cb) {
	const filetypes = /jpeg|jpg|png/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);
	const fileSize = parseInt(req.headers["content-length"]);
	// 2mb = 2*1024*1024=2097152
	if (extname && mimetype && fileSize < 2097152) {
		return cb(null, true);
	} else {
		cb("File should be less than equal 2mb \n it will be only image");
	}
}

const uploadThumbnail = multer({
	storage: storageThumbnail,
	fileFilter: function (req, file, cb) {
		checkFileTypeThumbnail(req, file, cb);
	},
});

router
	.route("/thumbnail")
	.post(uploadThumbnail.single("file"), function (req, res) {
		try {
			res.send(`/${req.file.path}`);
		} catch (error) {
			res.send(error.message);
		}
	});

module.exports = router;
