const express = require("express");
const { builtinModules } = require("module");
const productsRouter = express.Router();
const path = require("path");
const productControllers = require("../controllers/productControllers");
const notLogged = require("../middlewares/notLogged");

productsRouter.get("/newProduct", notLogged, productControllers.create);
productsRouter.post("/newProduct", notLogged, productControllers.store);

module.exports = productsRouter;
