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
require("dotenv").config();
require("colors");

connectDB();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const port = process.env.PORT || 8080;

app.get("/university", async (req, res) => {
	const universities = await University.find();
	res.send(universities);
});

app.get("/department", async (req, res) => {
	const departments = await Department.find();
	res.send(departments);
});

app.post("/courses", async (req, res) => {
	const query = req.body;
	const result = await Course.find(query);
	console.log(result);
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

app.post("/api/semester", async (req, res) => {
	const semester = new Semester(req.body);
	console.log(req.body);
	await semester.save();
	res.send(semester);
});

app.post("/resources/course/questions", async (req, res) => {
	const query = req.body;
	const data = await Resource.find(query);
	console.log(query);
	console.log(data[0]);
	res.send(data[0]);
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`.blue.underline.bold);
});
