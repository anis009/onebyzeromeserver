const univerisities = require("./data/university");
const department = require("./data/department");
const courses = require("./data/courses");
const resouces = require("./data/resource");
const University = require("./models/universityModel");
const Department = require("./models/departmentModel");
const Course = require("./models/courseModel");
const Resource = require("./models/resourcesModel");
const connectDB = require("./config/connectDb");
require("dotenv").config();

require("colors");
connectDB();
const importUniversity = async () => {
	await University.insertMany(univerisities);
};
const importdepartment = async () => {
	await Department.insertMany(department);
};
const importcourse = async () => {
	await Course.insertMany(courses);
};
const importResources = async () => {
	await Resource.insertMany(resouces);
};

importResources();
