import DB from "../controller/dataBase.js";

export default (req, res, next) => {
	const person = req.person;

	const admin = DB.findOneById(person.id);

	if (!admin || !admin.isAdmin)
		return res.status(403).json({ error: "Access denied. Insufficient permissions." }).end();

	next();
};
