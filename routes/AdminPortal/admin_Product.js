const express = require("express");
const router = express.Router();
const addProduct = require("../../Controller/AdminPortal/AdminProducts/adminAddProduct");

router.post("/add_new_product", async (req, res) => {
  addProduct(req, res);
});

module.exports = router;
