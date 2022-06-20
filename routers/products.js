const express = require("express");
const { builtinModules } = require("module");
const multer = require("multer");
const productsRouter = express.Router();
const path = require("path");
const productControllers = require("../controllers/productControllers");
const notLogged = require("../middlewares/notLogged");
const router = require("./main");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/img/product-create"));
    },
    filename: (req, file, cb) => {
      const newFilename =
        "profile" + Date.now() + path.extname(file.originalname);
      cb(null, newFilename);
    },
  });
  
  const upload = multer({ storage });

productsRouter.get("/newProduct", notLogged, productControllers.store);
productsRouter.post("/newProduct", notLogged,upload.single("imagenProducto"), productControllers.create);
router.get("/products",productControllers.products)


module.exports = productsRouter;
