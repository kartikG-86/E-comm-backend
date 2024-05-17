const express = require("express");
const getOrders = require("../../Controller/CustomerPortal/Order/order");
const newOrder = require("../../Controller/CustomerPortal/Order/newOrder");
const router = express.Router();

router.get("/orders/:userId", async (req, res) => {
  await getOrders(req, res);
});

router.post("/new_order", async (req, res) => {
  await newOrder(req, res);
});

module.exports = router;
