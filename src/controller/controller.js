import jwt from "jsonwebtoken";
import DB from "./dataBase.js";
// import bcrypt from "bcrypt";

// ----- ----- ----- USER ----- ----- -----
export const createUser = async ({ name = "", password = "" }) => {
	const user = DB.findOne(name);

	if (user) throw new Error("User name already exists.");

	// const hashPassword = await bcrypt.hash(password, 10);
	// const newUser = { name: name, password: hashPassword };

	const newUser = {
		name: name,
		password: password,
		isAdmin: false,
		note: "",
	};

	const data = DB.create(newUser);

	return data;
};

export const loginUser = async ({ name = "", password = "" }) => {
	const user = DB.findOne(name);

	// const passwordCorrect = await bcrypt.compare(password, user?.password);
	const passwordCorrect = password === user?.password;

	if (!user || !passwordCorrect) throw new Error("Invalid user or password.");

	const userForToken = { id: user.id };

	const token = jwt.sign(userForToken, process.env.SECRET_KEY, {
		expiresIn: 60 * 60, //Tiempo de expiración en seg
	});

	return { token: token };
};

export const searchUserById = async (id) => {
	const data = DB.findOneById(id);

	if (!data) throw Error("User on search, not found.");

	const { password, ...user } = data;

	return user;
};

export const updateUser = async (id, note) => {
	const data = DB.update(id, note);

	if (!data) throw Error("User on update, not found.");

	const { password, ...user } = data;

	return user;
};

export const deleteUser = async (id) => {
	const data = DB.remove(id);

	if (!data) throw Error("User on delete, not found.");

	const { password, ...user } = data;

	return user;
};

// ----- ----- ----- ADMIN ----- ----- -----

export const searchAllUser = async () => {
	const data = DB.findAll();

	const cleanData = data.map(({ password, ...user }) => user);

	return cleanData;
};
