const express = require ("express")
const router = express.Router()
const path = require ("path")
const mainControllers = require ("../controllers/mainControllers")

router.get("/", mainControllers.index);
  
  router.get ("/products", mainControllers.products)

  router.get("/products/:id", mainControllers.productDetail);
  
  router.get("/productCart", mainControllers.productCart  )

  router.get("/newProduct", mainControllers.newProduct)

  router.get("/login", mainControllers.login)

  router.get("/register", mainControllers.register)

  router.get("/about-us", mainControllers.about)


  module.exports = router