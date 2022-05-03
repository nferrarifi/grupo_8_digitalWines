const express = require("express");
const app = express();
const router = require("./routers/main");
const PORT = process.env.PORT || 3050;
const methodOverride = require("method-override");
const multer = require("multer");

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(router);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

app.listen(PORT, () => console.log("servidor corriendo en el puerto 3050"));
