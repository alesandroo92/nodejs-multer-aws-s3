const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const file = require("./routes/file");

app.use(express.json());
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));



//Routes
app.use("/upload", file);


app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado en el puerto: "+process.env.PORT);
});