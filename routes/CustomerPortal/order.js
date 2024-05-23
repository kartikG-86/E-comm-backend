const express = require("express");
const getOrders = require("../../Controller/CustomerPortal/Order/order");
const newOrder = require("../../Controller/CustomerPortal/Order/newOrder");
const getOrderDetails = require("../../Controller/CustomerPortal/Order/getOrderDetails");
const router = express.Router();

router.get("/orders/:userId", getOrders);

router.post("/new_order", newOrder);

router.get("/order_details/:orderId", getOrderDetails);

module.exports = router;
