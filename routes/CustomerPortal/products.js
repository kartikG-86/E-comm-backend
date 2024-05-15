const express = require("express");
const getProducts = require("../../Controller/CustomerPortal/Products/getProducts");
const router = express.Router();

router.get("/", async (req, res) => {
  await getProducts(req, res);
});

module.exports = router;
