const jwt = require("jsonwebtoken");
require("dotenv").config();

const greeting = async (req, res) => {
	const authHeader = req.headers.authorization;
	console.log(authHeader)

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		console.log("An error occurred");
		res.status(401).json({ messsage: "something went wrong" });
	}
	const token = authHeader.split(" ")[1];

	try {
		const encrypted = await jwt.verify(token, process.env.JWT_SECRET);
		const {userName} = encrypted
		// res.status(200).json({ message: encrypted });
		res.status(200).send(`<h1>Hello and welcome ${userName} </h1>`);
	} catch (error) {
		console.log(error);
		// res.status(400).json({message:"error"})
	}
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
