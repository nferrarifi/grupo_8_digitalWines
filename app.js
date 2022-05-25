const express = require("express");
const app = express();
const router = require("./routers/main");
const usersRouter = require("./routers/users");
const session = require("express-session");
const productsRouter = require("./routers/products");
const PORT = process.env.PORT || 3050;
const methodOverride = require("method-override");
const cookies = require("cookie-parser");

const userLogged = require("./middlewares/userLogged");

app.use(
  session({ secret: "secreto", resave: false, saveUninitialized: false })
);

app.use(cookies());
app.use(userLogged);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(router);
app.use(usersRouter);
app.use(productsRouter);
app.listen(PORT, () => console.log("servidor corriendo en el puerto 3050"));
