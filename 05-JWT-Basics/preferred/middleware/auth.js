const jwt = require('jsonwebtoken')

const authenticationMiddleWare = async(req, res, next) => {
  const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		console.log("An error occurred");
		res.status(500).json({ messsage: "something went wrong" });
	}
	const token = authHeader.split(" ")[1];
  try {
		const encrypted = await jwt.verify(token, process.env.JWT_SECRET);
    const {id, userName} = encrypted;
		req.user = {id, userName}
    next()
	} catch (error) {
		console.log(error);
		res.status(400).json({message:"error"})
	}
}

module.exports = authenticationMiddleWare