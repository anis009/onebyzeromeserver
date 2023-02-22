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

const multer = require("multer");
const { PDFNet } = require("@pdftron/pdfnet-node");
const PDFExtract = require("pdf.js-extract").PDFExtract;

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
	console.log(req.body);
	const query = req.body;
	const result = await Course.find(query);
	// console.log(result);
	res.send(result);
});

app.get("/", async (req, res) => {
	res.send(`running server on sina`);
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

app.listen(port, () => {
	console.log(`Server is running on ${port}`.blue.underline.bold);
});
