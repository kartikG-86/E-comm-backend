const express = require("express");
const add_more_user_details = require("../../Controller/CustomerPortal/User/User_more_details");
const deleteAddress = require("../../Controller/CustomerPortal/User/deleteUserAddress");
const router = express.Router();

// add user details

router.post("/add_user_details", add_more_user_details);

module.exports = router;
