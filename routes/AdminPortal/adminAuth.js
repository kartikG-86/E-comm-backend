const express = require("express");
const router = express.Router();
const signUp = require("../../Controller/AdminPortal/AdminUser/adminSignUp");
const login = require("../../Controller/AdminPortal/AdminUser/adminLogin");
const forgotPassword = require("../../Controller/AdminPortal/AdminUser/adminForgotPassword");

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
