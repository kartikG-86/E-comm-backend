const AdminUser = require("../../../models/AdminPortal/AdminUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const findUser = async (email) => {
  const user = await AdminUser.findOne({ email: email });
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

// const getAuthToken = async (user) => {
//   const data = {
//     user: {
//       id: user.id,
//     },
//   };

//   const authToken = jwt.sign(data, secretKey);
//   return authToken;
// };

const forgotPassword = async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;

  // compare new Password and Confirm Password
  if (newPassword != confirmPassword) {
    return res.send({
      error:
        "The new password and confirmed password do not match. Please ensure both passwords are identical and try again.",
      status: 400,
      success: false,
    });
  }

  // find User
  var user = await findUser(email);
  if (!user) {
    return res.send({
      error: "User doesn't exist",
      status: 400,
      success: false,
    });
  }

  // compare Previous password and new Password
  const comparePass = await comparePasswords(newPassword, user);
  if (comparePass) {
    return res.send({
      error:
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

  return res.send({
    message: "Password Updated Successfully",
    status: 200,
    success: true,
  });
};

module.exports = forgotPassword;
