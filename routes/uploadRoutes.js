const multer = require("multer");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { auth } = require("../middlewares/authMiddleWare");
const router = express.Router();

//TODO:: uploadPdf
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
// TODO::CHECK PDF TYPE
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

//TODO::UPLOAD PDF
const upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		checkFileType(req, file, cb);
	},
});
//TODO:: UPLOAD PDF ROUTER
router.route("/pdf").post(upload.single("file"), function (req, res) {
	try {
		res.send(`/${req.file.path}`);
	} catch (error) {
		res.send(error.message);
	}
});

// TODO::UPLOAD THUMBNAIL
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

//TODO:: CHECK UPLOAD THUMBNAIL
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

//TODO:: UPLOAD THUMBNAIL
const uploadThumbnail = multer({
	storage: storageThumbnail,
	fileFilter: function (req, file, cb) {
		checkFileTypeThumbnail(req, file, cb);
	},
});
//TODO::UPLOAD THUMBNAIL ROUTER
router
	.route("/thumbnail")
	.post(uploadThumbnail.single("file"), function (req, res) {
		try {
			res.send(`/${req.file.path}`);
		} catch (error) {
			res.send(error.message);
		}
	});

// TODO::UPLOAD PROFILE IMAGE
const storageProfileImage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads/profile");
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

//TODO:: CHECK UPLOAD profile image
function checkFileTypeProfileImage(req, file, cb) {
	const filetypes = /jpeg|jpg|png/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);
	const fileSize = parseInt(req.headers["content-length"]);
	//TODO:: 2mb = 2*1024*1024=2097152
	if (extname && mimetype && fileSize < 2097152) {
		return cb(null, true);
	} else {
		cb("File should be less than equal 2mb \n it will be only image");
	}
}

//TODO:: UPLOAD PROFILE IMAGE
const profileImage = multer({
	storage: storageProfileImage,
	fileFilter: function (req, file, cb) {
		checkFileTypeProfileImage(req, file, cb);
	},
});

//TODO::UPLOAD PROFILE IMAGE ROUTER
router
	.route("/profile")
	.post(auth, profileImage.single("file"), async function (req, res) {
		const email = req.query?.email;
		let user = req.user;
		// TODO:: TOKEN VALIDITY CHECK
		if (user?.email !== email) {
			return res.status(401).send({
				message: "Not authorized, token failed!",
			});
		}

		try {
			const imageUrl = user?.image;
			const currentUrl = req.file.path;
			// TODO::PROFILE IMAGE
			if (!imageUrl.includes("i.ibb.co")) {
				fs.unlink(`./${imageUrl}`, (err) => {
					if (err) {
						console.error(err);
					}
				});
			}
			//TODO:: UPDATE PROFILE IMAGE
			user.image = currentUrl;
			await user.save();
			res.send(user);
		} catch (error) {
			res.send({
				message: error.message,
			});
		}
	});

// TODO::UPLOAD question IMAGE
const storageQuestionImage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads/question");
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

//TODO:: CHECK UPLOAD question image
function checkFileTypeQuestionImage(req, file, cb) {
	const filetypes = /jpeg|jpg|png/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);
	const fileSize = parseInt(req.headers["content-length"]);
	//TODO:: 5mb = 5*1024*1024=5242880
	if (extname && mimetype && fileSize < 5242880) {
		return cb(null, true);
	} else {
		cb("Question should be less than equal 5mb \n it will be only image");
	}
}

//TODO:: UPLOAD PROFILE IMAGE
const questionImage = multer({
	storage: storageQuestionImage,
	fileFilter: function (req, file, cb) {
		checkFileTypeQuestionImage(req, file, cb);
	},
});

//TODO::UPLOAD PROFILE IMAGE ROUTER
router
	.route("/question")
	.post(auth, questionImage.single("file"), async function (req, res) {
		const email = req.query?.email;
		let user = req.user;
		// TODO:: TOKEN VALIDITY CHECK
		if (user?.email !== email) {
			return res.status(401).send({
				message: "Not authorized, token failed!",
			});
		}

		try {
			res.send(`${req.file.path}`);
		} catch (error) {
			res.send({
				message: error.message,
			});
		}
	});

module.exports = router;
