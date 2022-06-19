const express = require("express");
const { builtinModules } = require("module");
const productsRouter = express.Router();
const path = require("path");
const productControllers = require("../controllers/productControllers");
const notLogged = require("../middlewares/notLogged");

productsRouter.get("/newProduct", notLogged, productControllers.store);
productsRouter.post("/newProduct", notLogged, productControllers.create);



module.exports = productsRouter;
