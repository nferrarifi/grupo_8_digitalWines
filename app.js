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


