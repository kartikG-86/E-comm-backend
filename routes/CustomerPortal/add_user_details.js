const express = require("express");
const add_more_user_details = require("../../Controller/CustomerPortal/User/User_more_details");
const router = express.Router();

// add user details

router.post("/add_user_details", async (req, res) => {
  await add_more_user_details(req, res);
});

module.exports = router;
