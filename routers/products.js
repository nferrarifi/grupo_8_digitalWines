const express = require("express");
const { builtinModules } = require("module");
const productsRouter = express.Router();
const path = require("path");
const productControllers = require("../controllers/productControllers");

productsRouter.get("/newProduct", productControllers.create);
productsRouter.post("/newProduct", productControllers.store);

module.exports = productsRouter;
