let userApiController = require("../../controllers/api/userApiController");
const express = require("express");
const router = express.Router();

router.get("/api/users", userApiController.list);
router.get("/api/users/:id", userApiController.detail);

module.exports = router;
