const express = require ("express")
const router = express.Router()
const path = require ("path")
const mainControllers = require ("../controllers/mainControllers")

router.get("/", mainControllers.index);
  

  router.get("/productdetail/:id?", mainControllers.productDetail);
  
  router.get("/productCart", (req, res) => {
    res.sendFile(path.resolve("./views/productCart.html"));
  });
  router.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
  });
  router.get("/register", (req, res) => {
    res.sendFile(path.resolve("./views/register.html"));
  });
  router.get("/about-us", (req, res) => {
    res.sendFile(path.resolve("./views/about-us.html"));
  });

  module.exports = router