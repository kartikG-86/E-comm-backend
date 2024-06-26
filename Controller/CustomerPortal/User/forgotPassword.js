const userModel = require("../../../models/CustomerPortal/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const findUser = async (email) => {
  const user = await userModel.findOne({ email: email });
  return user;
};

const comparePasswords = async (newPassword, user) => {
  const compare = await bcrypt.compare(newPassword, user.password);
  return compare;
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  return secPass;
};

const getAuthToken = async (id) => {
  const data = {
    user: {
      id: id,
    },
  };

  const authToken = jwt.sign(data, secretKey);
  return authToken;
};

const forgotPassword = async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;

  // compare new Password and Confirm Password
  if (newPassword != confirmPassword) {
    return res.send({
      message:
        "The new password and confirmed password do not match. Please ensure both passwords are identical and try again.",
      status: 400,
      success: false,
    });
  }

  // find User
  var user = await findUser(email);
  if (!user) {
    return res.send({
      message: "User doesn't exist",
      status: 400,
      success: false,
    });
  }

  // compare Previous password and new Password
  const comparePass = await comparePasswords(newPassword, user);
  if (comparePass) {
    return res.send({
      message:
        "Your new password must be different from your previous password. Please choose a new password.",
      status: 400,
      success: false,
    });
  }

  // Update Password
  const hashedPassword = await hashPassword(newPassword);
  const id = user.id;
  user = await userModel.updateOne(
    { email: email },
    { $set: { password: hashedPassword } }
  );

  const authToken = await getAuthToken(id);
  return res.send({
    token: authToken,
    message: "Password Updated Successfully",
    status: 200,
    success: true,
  });
};

module.exports = forgotPassword;
