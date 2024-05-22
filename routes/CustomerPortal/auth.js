const express = require("express");
const router = express.Router();
const login = require("../../Controller/CustomerPortal/User/login");
const signUp = require("../../Controller/CustomerPortal/User/signup");
const forgotPassword = require("../../Controller/CustomerPortal/User/forgotPassword");
const getUser = require("../../Controller/CustomerPortal/User/getUserDetails");
const add_more_user_details = require("../../Controller/CustomerPortal/User/User_more_details");
const deleteAddress = require("../../Controller/CustomerPortal/User/deleteUserAddress");

// Sign UP
router.post("/signUp", async (req, res) => {
  await signUp(req, res);
});

// Login
router.post("/login", async (req, res) => {
  await login(req, res);
});

//forgotPassword
router.post("/forgotPassword", async (req, res) => {
  await forgotPassword(req, res);
});

router.get("/user/:userId", async (req, res) => {
  await getUser(req, res);
});

router.post("/add_user_details", async (req, res) => {
  await add_more_user_details(req, res);
});

// delete user Address

router.post("/delete_address", async (req, res) => {
  await deleteAddress(req, res);
});

module.exports = router;
