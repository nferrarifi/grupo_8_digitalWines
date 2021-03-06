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





router.get("/productCart", mainControllers.productCart);

//router.get("/newProduct", mainControllers.newProduct);

//router.get("products/crear", mainControllers.crear);

//router.post(
//  "/products/crear",
// upload.single("imagenUsuario"),
//  mainControllers.store
//);

router.get("/about-us", mainControllers.about);



module.exports = router;
