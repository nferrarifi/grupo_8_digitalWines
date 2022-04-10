const express = require("express");
const app = express();
const router = require ("./routers/main")
const PORT = process.env.PORT || 3050

app.set ('view engine', 'ejs')
app.use(express.static("public"));
app.use (router)

app.listen(PORT, () => console.log("servidor corriendo en el puerto 3050"));



