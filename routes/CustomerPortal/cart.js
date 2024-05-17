const express = require("express");
const router = express.Router();
const addToCart = require("../../Controller/CustomerPortal/Cart/addToCart");
const getCartProducts = require("../../Controller/CustomerPortal/Cart/cartProduct");
const deleteItem = require("../../Controller/CustomerPortal/Cart/delete_from_cart");
const updateItem = require("../../Controller/CustomerPortal/Cart/Update_quantity");
const cartLength = require("../../Controller/CustomerPortal/Cart/cart_length");

router.post("/add_to_cart", async (req, res) => {
  await addToCart(req, res);
});

router.get("/cart_products/:userId", async (req, res) => {
  console.log(req.params.userId);
  await getCartProducts(req, res);
});

router.delete("/delete_cart_product/:cartId", async (req, res) => {
  console.log("Cart Id", req.params.cartId);
  await deleteItem(req, res);
});

router.post("/update_quantity", async (req, res) => {
  await updateItem(req, res);
});

router.get("/cart-length/:userId", async (req, res) => {
  await cartLength(req, res);
});

module.exports = router;
