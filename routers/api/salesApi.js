let salesApiController = require("../../controllers/api/salesApiController");
const express = require("express");
const router = express.Router();

router.get("/api/sales", salesApiController.list);

module.exports = router;
