import express from "express";
import tokenExtractor from "../middleware/tokenExtractor.js";
import adminGuard from "../middleware/adminGuard.js";
import {
	createUser,
	deleteUser,
	loginUser,
	searchAllUser,
	searchUserById,
	updateUser,
} from "../controller/controller.js";

const router = express.Router();

// ----- ----- ----- USER ----- ----- -----

// Crear cuenta
router.post("/user/register", async (req, res) => {
	try {
		const { name, password } = req.body;
		if (!name || !password)
			return res.status(400).json({ error: "Name and password are required." }).end();

		await createUser({ name: name, password: password });

		return res.status(201).json({ message: "User created successfully." }).end();
	} catch (err) {
		return res.status(400).json({ error: err.message }).end();
	}
});

// Ingresar
router.post("/user/login", async (req, res) => {
	try {
		const { name, password } = req.body;

		const token = await loginUser({ name, password });

		return res.status(201).json(token).end();
	} catch (err) {
		return res.status(400).json({ error: err.message }).end();
	}
});

// Leer datos del usuario autenticado
router.get("/user", tokenExtractor, async (req, res) => {
	try {
		const person = req.person;

		const data = await searchUserById(person.id);

		return res.status(200).json({ user: data }).end();
	} catch (err) {
		return res.status(400).json({ error: err.message }).end();
	}
});

// Actualizar datos del usuario autenticado
router.put("/user", tokenExtractor, async (req, res) => {
	try {
		const person = req.person;
		const newNote = req.body.note;

		const data = await updateUser(person.id, newNote);

		return res.status(200).json({ user: data }).end();
	} catch (err) {
		return res.status(400).json({ error: err.message }).end();
	}
});

// Eliminar datos del usuario autenticado
router.delete("/user", tokenExtractor, async (req, res) => {
	try {
		const person = req.person;

		const data = await deleteUser(person.id);

		return res.status(200).json({ delete: data }).end();
	} catch (err) {
		return res.status(400).json({ error: err.message }).end();
	}
});

// ----- ----- ----- ADMIN ----- ----- -----

// Devuelve todos los usuarios
router.get("/admin", tokenExtractor, adminGuard, async (req, res) => {
	try {
		const data = await searchAllUser();

		return res.status(200).json(data).end();
	} catch (err) {
		return res.status(400).json({ error: err.message }).end();
	}
});

// Devuelve un usuario especifico
router.get("/admin/:id", tokenExtractor, adminGuard, async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		if (isNaN(id))
			return res.status(400).json({ error: "Invalid user ID" }).end();

		const data = await searchUserById(id);

		return res.status(200).json(data).end();
	} catch (err) {
		return res.status(400).json({ error: err.message }).end();
	}
});

export default router;
