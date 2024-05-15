const AdminUser = require("../../../models/AdminPortal/AdminUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = "Kartikisagood$oY";

const findUser = async (email) => {
  const user = await AdminUser.findOne({ email: email });
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
    console.log(req.body);
    const { email, password } = req.body;
    const user = await findUser(email);
    if (!user) {
      return res.json({
        error: "User doesn't exist",
      });
    }
    const passwordCheck = await passwordCompare(user, password);
    if (!passwordCheck) {
      return res.json({
        error: "Invalid User Credentials",
        success: false,
      });
    }

    const authToken = await getAuthToken(user);
    return res.json({
      token: authToken,
      success: true,
      message: "Login Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = login;
