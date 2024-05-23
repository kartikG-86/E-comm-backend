const express = require("express");
const router = express.Router();
const signUp = require("../../Controller/AdminPortal/AdminUser/adminSignUp");
const login = require("../../Controller/AdminPortal/AdminUser/adminLogin");
const forgotPassword = require("../../Controller/AdminPortal/AdminUser/adminForgotPassword");

// Sign UP
router.post("/signUp", signUp);

// Login
router.post("/login", login);

//forgotPassword
router.post("/forgotPassword", forgotPassword);

module.exports = router;
