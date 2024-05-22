const User = require("../../../models/CustomerPortal/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const findUser = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

const passwordCompare = async (user, password) => {
  const check = await bcrypt.compare(password, user.password);
  return check;
};

const getAuthToken = async (user) => {
  const data = {
    user: {
      id: user.id,
    },
  };

  const authToken = jwt.sign(data, secretKey);
  return authToken;
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUser(email);
    if (!user) {
      return res.json({
        message: "User doesn't exist",
        status: 400,
        success: false,
      });
    }
    const passwordCheck = await passwordCompare(user, password);
    if (!passwordCheck) {
      return res.json({
        message: "Invalid User Credentials",
        success: false,
        status: 400,
      });
    }

    const authToken = await getAuthToken(user);
    return res.json({
      token: authToken,
      status: 200,
      success: true,
      message: "Login Successfully",
    });
  } catch (err) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = login;
