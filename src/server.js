import express from "express";
import bodyParser from "body-parser";

import pages from "./routes/pages.js";
import routes from "./routes/routes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar rutas
app.use("/", pages);
app.use("/", routes);

app.listen(3000, () => {
	console.log("app listening on http://localhost:3000");
});
