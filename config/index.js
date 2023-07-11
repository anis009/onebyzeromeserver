const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
	path: path.join(process.cwd(), ".env"),
});

module.exports = {
	port: process.env.PORT,
	node_env: process.env.NODE_ENV,
};
