const express = require("express");
const router = express.Router();
const login = require("../../Controller/CustomerPortal/User/login");
const signUp = require("../../Controller/CustomerPortal/User/signup");
const forgotPassword = require("../../Controller/CustomerPortal/User/forgotPassword");

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

module.exports = router;
