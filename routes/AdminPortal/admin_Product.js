const express = require("express");
const router = express.Router();
const addProduct = require("../../Controller/AdminPortal/AdminProducts/adminAddProduct");

router.post("/add_new_product", addProduct);

module.exports = router;
