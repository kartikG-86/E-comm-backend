const express = require("express");
const router = express.Router();
const addToCart = require("../../Controller/CustomerPortal/Cart/addToCart");
const getCartProducts = require("../../Controller/CustomerPortal/Cart/cartProduct");

router.post("/add_to_cart", async (req, res) => {
  await addToCart(req, res);
});

router.get("/cart_products/:userId", async (req, res) => {
  console.log(req.params.userId);
  await getCartProducts(req, res);
});

module.exports = router;
