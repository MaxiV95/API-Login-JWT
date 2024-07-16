import jwt from "jsonwebtoken";

export default (req, res, next) => {
	try {
		const authorization = req.get("authorization");
		let token = "";

		if (authorization && authorization.toLowerCase().startsWith("bearer"))
			token = authorization.substring(7);

		const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

		req.person = decodedToken;

		next();
	} catch (err) {
		return res.status(401).json({ error: err.message }).end();
	}
};
