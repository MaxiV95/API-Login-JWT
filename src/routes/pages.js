import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const pages = express.Router();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

pages.get("/", async (req, res) => {
	console.log("buscando index.html");
	return res.status(200).sendFile(path.join(__dirname, "index.html"));
});

export default pages;
