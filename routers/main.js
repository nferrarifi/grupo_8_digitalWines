const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mainControllers = require("../controllers/mainControllers");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img/product-create"));
  },
  filename: (req, file, cb) => {
    const newFilename =
      "product-" + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});
const upload = multer({ storage });

router.get("/", mainControllers.index);

router.get("/products", mainControllers.products);

router.get("/products/:id", mainControllers.productDetail);

router.get("/productCart", mainControllers.productCart);

//router.get("/newProduct", mainControllers.newProduct);

//router.get("products/crear", mainControllers.crear);

//router.post(
//  "/products/crear",
// upload.single("imagenUsuario"),
//  mainControllers.store
//);

router.get("/about-us", mainControllers.about);

router.delete("/products/delete/:id", mainControllers.destroy);

router.get("/products/edit/:id", mainControllers.edit);

router.patch("/products/edit/:id", mainControllers.update);

module.exports = router;
