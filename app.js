const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3050, () => {
  console.log("servidor corriendo en el puerto 3050");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

app.get("/productdetail", (req, res) => {
  res.sendFile(path.resolve("./views/productdetail.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve("./views/productCart.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve("./views/register.html"));
});
app.get("/about-us", (req, res) => {
  res.sendFile(path.resolve("./views/about-us.html"));
});

