const users = require("express").Router();

const createUser = require("../controllers/users/createUser");
const loginUser = require("../controllers/users/loginUser");
//const searchUser = require("../controllers/users/searchUser");
//const updateUser = require("../controllers/users/updateUser");
const userExtractor = require("../middleware/userExtractor");

users.get("/:id", userExtractor, async (req, res, next) => {
  try { // Leer
    //const { id } = req.params;
    //const user = await searchUser({id});
    //return res.status(200).json(user).end();
    const response = { message: "It does not work" };
    return res.status(501).json(response).end();
  } catch (error) {
    next(error);
  }
});

users.get("/", userExtractor, async (req, res, next) => {
  try { // Leer
    //const users = await searchUser({});
    //return res.status(200).json(users).end();
    const response = { message: "It does not work" };
    return res.status(501).json(response).end();
  } catch (error) {
    next(error);
  }
});

users.post("/login", async (req, res, next) => {
  try { // Crear - ingresar
    const { email, password } = req.body;
    const newUser = await loginUser({ email, password });
    return res.status(201).json(newUser).end();
  } catch (error) {
    next(error);
  }
});

users.post("/", async (req, res, next) => {
  try { // Crear
    const { email, password } = req.body;
    const newUser = await createUser({ email, password });
    return res.status(201).json(newUser).end();
  } catch (error) {
    next(error);
  }
});

users.put("/", userExtractor, async (req, res, next) => {
  try { // Modificar
    const response = { message: "It does not work" };
    return res.status(501).json(response).end();
  } catch (error) {
    next(error);
  }
});

users.delete("/", userExtractor, async (req, res, next) => {
  try { // Borrar
    const response = { message: "It does not work" };
    return res.status(501).json(response).end();
  } catch (error) {
    next(error);
  }
});

module.exports = users;
