const express = require("express");
const router = express.Router();
const login = require("../../Controller/CustomerPortal/User/login");
const signUp = require("../../Controller/CustomerPortal/User/signup");
const forgotPassword = require("../../Controller/CustomerPortal/User/forgotPassword");
const getUser = require("../../Controller/CustomerPortal/User/getUserDetails");
const add_more_user_details = require("../../Controller/CustomerPortal/User/User_more_details");
const deleteAddress = require("../../Controller/CustomerPortal/User/deleteUserAddress");

// Sign UP
router.post("/signUp", signUp);

// Login
router.post("/login", login);

//forgotPassword
router.post("/forgotPassword", forgotPassword);

// get user from user Id
router.get("/user/:userId", getUser);

// add more details to user account
router.post("/add_user_details", add_more_user_details);

// delete user Address

router.post("/delete_address", deleteAddress);

module.exports = router;
