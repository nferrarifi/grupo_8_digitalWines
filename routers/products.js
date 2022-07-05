const express = require("express");
const { builtinModules } = require("module");
const multer = require("multer");
const productsRouter = express.Router();
const path = require("path");
const productControllers = require("../controllers/productControllers");
const notLogged = require("../middlewares/notLogged");
const { check } = require("express-validator");
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
//Validations

const newProductValidation = [
  check("nombre")
    .notEmpty()
    .withMessage("Es obligatorio ingresar un nombre")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener un minimo de 2 caracteres"),
  check("descripcion")
    .notEmpty()
    .withMessage("Es obligatorio ingresar una descripcion")
    .isLength({ min: 2 }),

  check("precio").notEmpty().withMessage("Es obligatorio ingresar el precio"),
  check("descuento")
    .notEmpty()
    .withMessage("es obligatorio ingresar el descuento"),
];

productsRouter.get("/newProduct", notLogged, productControllers.store);
productsRouter.post(
  "/newProduct",
  notLogged,
  upload.single("imagenProducto"),
  newProductValidation,
  productControllers.create
);
productsRouter.get("/products", productControllers.products);
productsRouter.get("/products/detail/:id", productControllers.productDetail);
productsRouter.delete("/products/delete/:id", productControllers.destroy);

productsRouter.get("/products/edit/:id", productControllers.edit);

productsRouter.patch(
  "/products/edit/:id",
  upload.single("imagenProducto"),
  newProductValidation,
  productControllers.update
);
productsRouter.delete("/products/delete/:id", productControllers.destroy);

productsRouter.get("/products/search", productControllers.search);

module.exports = productsRouter;
