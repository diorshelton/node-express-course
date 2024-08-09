const jwt = require("jsonwebtoken");
require("dotenv").config();

const greeting = async (req, res) => {
	res.status(200).send(`<h1>Hello and welcome ${req.user.userName} </h1>`);
};

const logOn = async (req, res) => {
	const userData = req.body;
	const userName = userData.name;
	const id = new Date().getDate();

	try {
		const token = await jwt.sign({ id, userName }, process.env.JWT_SECRET, {
			expiresIn: "24h",
		});

		if (userData.name && userData.password) {
			res.status(200).json({ message: "Post Route Reached", token });
		} else {
			res.status(400).json({ message: "Please enter a username and password" });
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = { logOn, greeting };
