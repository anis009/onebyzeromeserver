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
const path = require("path");
const multer = require("multer");
require("dotenv").config();
require("colors");

connectDB();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes

app.use("/api/contribute/", contributeRouter);

app.use("/uploads/pdf", express.static(path.join(__dirname, "uploads/pdf")));

const port = process.env.PORT || 8080;
// uploadPdf
const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads/pdf");
	},
	filename(req, file, cb) {
		console.log(file);
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

const upload = multer({ storage: storage });

app.post("/upload/pdf", upload.single("file"), function (req, res) {
	res.send(`/${req.file.path}`);
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
	res.send("running");
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
