import express from "express";
const app = express();
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
import router from "./routes/routes.ts";

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/", router)
app.get("*", (_req, res) => {
    res.status(404).send("No se ha encontrado la ruta especificada!")
})

export default app;
