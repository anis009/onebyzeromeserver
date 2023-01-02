const express = require("express");
const connectDB = require("./config/connectDb");
const University = require("./models/universityModel");
const Department = require("./models/departmentModel");
const Course = require("./models/courseModel");
const Resource = require("./models/resourcesModel");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const Year = require("./models/yearModel");
const Semester = require("./models/semesterModel");
const { default: mongoose } = require("mongoose");
const contributeRouter = require("./routes/contributeRoute");
const userRouter = require("./routes/userRoute");
const adminRouter = require("./routes/adminRoutes");
const sessionRouter = require("./routes/sessionRoute");
const path = require("path");
const multer = require("multer");

require("dotenv").config();
require("colors");

connectDB();

// middleware
app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);
app.use(morgan("dev"));

// routes

app.use("/api/contribute/", contributeRouter);
app.use("/api/user/", userRouter);
app.use("/api/admin/", adminRouter);
app.use("/api/session/", sessionRouter);
app.use("/uploads/pdf", express.static(path.join(__dirname, "uploads/pdf")));

const port = process.env.PORT || 8080;
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

app.post("/upload/pdf", upload.single("file"), function (req, res) {
	try {
		res.send(`/${req.file.path}`);
	} catch (error) {
		res.send(error.message);
	}
});

app.get("/university", async (req, res) => {
	const universities = await University.find();
	res.send(universities);
});

app.get("/department", async (req, res) => {
	const departments = await Department.find();
	res.send(departments);
});

app.post("/courses", async (req, res) => {
	console.log(req.body);
	const query = req.body;
	const result = await Course.find(query);
	// console.log(result);
	res.send(result);
});

app.get("/", async (req, res) => {
	res.send(`running server on  ${port}`);
});

app.post("/api/year", async (req, res) => {
	const year = new Year(req.body);
	console.log(req.body);
	await year.save();
	res.send(year);
});

app.get("/api/year", async (req, res) => {
	const year = await Year.find();
	res.send(year);
});

app.post("/api/semester", async (req, res) => {
	const semester = new Semester(req.body);
	console.log(req.body);
	await semester.save();
	res.send(semester);
});
app.get("/api/semester", async (req, res) => {
	const semester = await Semester.find();
	res.send(semester);
});

app.post("/resources/course", async (req, res) => {
	const query = req.body;
	console.log(query);
	const data = await Resource.find(query);
	res.send(data[0]);
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`.blue.underline.bold);
});
