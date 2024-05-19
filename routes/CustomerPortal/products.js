const express = require("express");
const getProducts = require("../../Controller/CustomerPortal/Products/getProducts");
const getProductDetails = require("../../Controller/CustomerPortal/Products/getProductDetails");
const router = express.Router();

router.get("/", async (req, res) => {
  await getProducts(req, res);
});

router.get("/product_details/:productId", async (req, res) => {
  await getProductDetails(req, res);
});

module.exports = router;
