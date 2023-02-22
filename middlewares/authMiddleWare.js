const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
exports.auth = async (req, res, next) => {
	let token;
	console.log(req.headers.authorization);
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			token = req.headers.authorization.split(" ")[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			//	console.log(decoded);
			const user = await User.findOne({ email: decoded?.email }).exec();
			if (!user) {
				return res.status(401).send({
					message: "Not authorized, Your token is expired",
				});
			}
			console.log(user);
			req.user = user;
			next();
		} catch (err) {
			res.status(401).send({
				message: "Not authorized, token failed!",
			});
		}
	} else {
		res.status(401).send({
			message: "Not authorized , no token",
		});
	}
};

exports.admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error("Not authorized as an admin");
	}
};
