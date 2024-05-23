const express = require("express");
const router = express.Router();
const addToCart = require("../../Controller/CustomerPortal/Cart/addToCart");
const getCartProducts = require("../../Controller/CustomerPortal/Cart/cartProduct");
const deleteItem = require("../../Controller/CustomerPortal/Cart/delete_from_cart");
const updateItem = require("../../Controller/CustomerPortal/Cart/Update_quantity");
const cartLength = require("../../Controller/CustomerPortal/Cart/cart_length");
const emptyCart = require("../../Controller/CustomerPortal/Cart/emptyCart");

router.post("/add_to_cart", addToCart);

router.get("/cart_products/:userId", getCartProducts);

router.delete("/delete_cart_product/:cartId", deleteItem);

router.post("/update_quantity", updateItem);

router.get("/cart-length/:userId", cartLength);

router.get("/empty_cart/:userId", emptyCart);

module.exports = router;
