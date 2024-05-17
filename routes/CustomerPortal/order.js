const express = require("express");
const getOrders = require("../../Controller/CustomerPortal/Order/order");
const newOrder = require("../../Controller/CustomerPortal/Order/newOrder");
const getOrderDetails = require("../../Controller/CustomerPortal/Order/getOrderDetails");
const router = express.Router();

router.get("/orders/:userId", async (req, res) => {
  await getOrders(req, res);
});

router.post("/new_order", async (req, res) => {
  await newOrder(req, res);
});

router.get("/order_details/:orderId", async (req, res) => {
  await getOrderDetails(req, res);
});

module.exports = router;
