const express = require("express");
const connectDB = require("./config/connectDb");
const University = require("./models/universityModel");
const Department = require("./models/departmentModel");
const Course = require("./models/courseModel");
const Resource = require("./models/resourcesModel");
const promises = require("fs").promises;
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const contributeRouter = require("./routes/contributeRoute");
const userRouter = require("./routes/userRoute");
const examNameRouter = require("./routes/examNameRoute");
const adminRouter = require("./routes/adminRoutes");
const sessionRouter = require("./routes/sessionRoute");
const uploadRouter = require("./routes/uploadRoutes");
const yearRouter = require("./routes/yearRoute");
const semesterRouter = require("./routes/semesterRoute");
const courseRouter = require("./routes/courseRoutes");
const resourcesRouter = require("./routes/resourcesRoutes");
const path = require("path");
const fs = require("fs");
const http = require("http");

require("dotenv").config();
require("colors");

connectDB();

// middleware
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});
app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());
app.use(morgan("dev"));

// routes

app.use("/api/contribute/", contributeRouter);
app.use("/api/user/", userRouter);
app.use("/api/admin/", adminRouter);
app.use("/api/session/", sessionRouter);
app.use("/api/examname/", examNameRouter);
app.use("/api/upload/", uploadRouter);
app.use("/api/year/", yearRouter);
app.use("/api/semester/", semesterRouter);
app.use("/api/course/", courseRouter);
app.use("/api/resources/", resourcesRouter);
app.use("/uploads/pdf", express.static(path.join(__dirname, "uploads/pdf")));
app.use(
	"/uploads/thumbnail",
	express.static(path.join(__dirname, "uploads/thumbnail"))
);
app.use(
	"/uploads/profile",
	express.static(path.join(__dirname, "uploads/profile"))
);
app.use(
	"/uploads/question",
	express.static(path.join(__dirname, "uploads/question"))
);

app.get("/university", async (req, res) => {
	try {
		const universities = await University.find();
		universities.sort((a, b) => a.name.localeCompare(b.name));
		res.send(universities);
	} catch (error) {
		res.send({
			message: error.message,
		});
	}
});

app.get("/department", async (req, res) => {
	try {
		const departments = await Department.find();
		departments.sort((a, b) => a.name.localeCompare(b.name));
		res.send(departments);
	} catch (error) {}
});

app.post("/courses", async (req, res) => {
	console.log(req.body);
	const query = req.body;
	const result = await Course.find(query);
	// console.log(result);
	res.send(result);
});

app.get("/", async (req, res) => {
	res.send(`running server on sina on port 8080`);
});

app.post("/api/thumbnail", async (req, res) => {
	const pdf = req.body.file;
	try {
		const data = await promises.readFile(pdf);
		res.contentType("image/png");
		res.send(data);
	} catch (err) {
		res.send(err.message);
	}
});

app.post("/api/pdf", async (req, res) => {
	const pdf = req.body.file;
	const data = await promises.readFile(pdf);
	res.contentType("application/pdf");
	res.send(data);
});

app.post("/resources/course", async (req, res) => {
	const query = req.body;
	console.log(query);
	const data = await Resource.find(query);
	res.send(data[0]);
});

app.get("/update/resources", async (req, res) => {
	const data = await Resource.updateMany(
		{
			books: {
				$exists: true,
			},
		},
		{ $set: { "books.$[].thumbnail": "" } }
	);
	res.send(data);
});

app.get("/delete", async (req, res) => {
	fs.unlink("./uploads/pdf/expression-operator-1671829992403.pdf", (err) => {
		if (err) {
			console.error(err);
		}
	});

	console.log(`File  deleted from database.`);
	res.send("delete");
});

const coursesDemo = [
	{
		varsity: "University of Barishal",
		year: 4,
		semester: 2,
		department: "Computer Science & Engineering",
		courses: [
			{
				title: "Digital Image Processing",
				code: "CSE-4201",
				credit: 3,
				hours: 45,
				majorMinor: 1,
			},
			{
				title: "Project and Thesis",
				code: "CSE-4202",
				credit: 6,
				hours: 0,
				majorMinor: 1,
			},
			{
				title: "Distributed Systems",
				code: "CSE-4203",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Distributed Systems Lab.",
				code: "CSE-4204",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Cryptography and Network Security",
				code: "CSE-4205",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Cryptography and Network Security Lab.",
				code: "CSE-4206",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Basic Multimedia Theory",
				code: "CSE-4207",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Multimedia Lab.",
				code: "CSE-4208",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Algorithm Engineering",
				code: "CSE-4209",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Algorithm Engineering Lab.",
				code: "CSE-4210",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Computational Geometry",
				code: "CSE-4211",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Computational Geometry Lab.",
				code: "CSE-4212",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Machine Learning",
				code: "CSE-4213",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Machine Learning Lab.",
				code: "CSE-4214",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Pattern Recognition",
				code: "CSE-4215",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Pattern Recognition Lab.",
				code: "CSE-4216",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "VLSI Design",
				code: "CSE-4217",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "VLSI Design Lab.",
				code: "CSE-4218",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Wireless Networks",
				code: "CSE-4219",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Wireless Networks Lab.",
				code: "CSE-4220",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Optical Fiber Communication",
				code: "CSE-4221",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Optical Fiber Communication Lab.",
				code: "CSE-4222",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Human Computer Interaction",
				code: "CSE-4223",
				credit: 3,
				hours: 45,
				majorMinor: 0,
			},
			{
				title: "Human Computer Interaction Lab.",
				code: "CSE-4224",
				credit: 1.5,
				hours: 45,
				majorMinor: 0,
			},
		],
	},
];

app.get("/add/demo/course", async (req, res) => {
	try {
		const course = await Course.insertMany(coursesDemo);
		res.send(course);
	} catch (error) {
		console.log(error);
		res.send(error);
	}
});

app.post("/add/demo/department", async (req, res) => {
	const { name } = req.body;
	try {
		const dep = new Department({
			name,
		});
		await dep.save();
		res.send(dep);
	} catch (error) {
		res.send(error);
	}
});

app.post("/add/demo/university/", async (req, res) => {
	try {
		const unv = new University(req.body);
		await unv.save();
		res.send(unv);
	} catch (error) {}
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Server is running on ${port}`.blue.underline.bold);
});
