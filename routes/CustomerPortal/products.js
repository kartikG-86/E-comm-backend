const express = require("express");
const getProducts = require("../../Controller/CustomerPortal/Products/getProducts");
const getProductDetails = require("../../Controller/CustomerPortal/Products/getProductDetails");
const getAllProducts = require("../../Controller/CustomerPortal/Products/getAllProducts");
const getSearchProducts = require("../../Controller/CustomerPortal/Products/getSearchProducts");
const router = express.Router();

router.get("/:pageNumber", async (req, res) => {
  await getProducts(req, res);
});

router.get("/all/prodcuts", async (req, res) => {
  await getAllProducts(req, res);
});

router.get("/search/:searchQuery", async (req, res) => {
  await getSearchProducts(req, res);
});

router.get("/product_details/:productId", async (req, res) => {
  await getProductDetails(req, res);
});

module.exports = router;
