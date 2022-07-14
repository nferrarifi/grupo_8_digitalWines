let productApiController = require("../../controllers/api/productApiController")
const express = require('express');
const router = express.Router();


router.get("/api/product", productApiController.list)
router.get("/api/product/:id", productApiController.detail)




module.exports= router;