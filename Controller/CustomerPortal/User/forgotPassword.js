const User = require("../../../models/CustomerPortal/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = "Kartikisagood$osdafasdY";

const findUser = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

const comparePasswords = async (newPassword, user) => {
  const compare = await bcrypt.compare(newPassword, user.password);
  return compare;
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  console.log(secPass);
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
  console.log(email, newPassword, confirmPassword);

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
  user = await User.updateOne(
    { email: email },
    { $set: { password: hashedPassword } }
  );

  console.log(user);
  const authToken = await getAuthToken(id);
  console.log(authToken);
  return res.send({
    token: authToken,
    message: "Password Updated Successfully",
    status: 200,
    success: true,
  });
};

module.exports = forgotPassword;
