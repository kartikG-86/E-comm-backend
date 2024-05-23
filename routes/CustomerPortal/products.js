const express = require("express");
const getProducts = require("../../Controller/CustomerPortal/Products/getProducts");
const getProductDetails = require("../../Controller/CustomerPortal/Products/getProductDetails");
const getAllProducts = require("../../Controller/CustomerPortal/Products/getAllProducts");
const getSearchProducts = require("../../Controller/CustomerPortal/Products/getSearchProducts");
const getCategoryProducts = require("../../Controller/CustomerPortal/Products/categoryWiseProducts");
const router = express.Router();

router.get("/:pageNumber", getProducts);

router.get("/all/prodcuts", getAllProducts);

router.get("/search/:searchQuery", getSearchProducts);

router.get("/product_details/:productId", getProductDetails);

router.get("/category/:category/:subCategory", getCategoryProducts);

module.exports = router;
