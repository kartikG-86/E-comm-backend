const bcrypt = require("bcryptjs");
const userModel = require("../../../models/CustomerPortal/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const findUser = async (email) => {
  const user = await userModel.findOne({ email: email });
  return user;
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

const createNewUser = async (userName, email, password) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  const newUser = await userModel.create({
    userName: userName,
    email: email,
    password: secPass,
  });

  return newUser;
};

const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = await findUser(email);

    if (user) {
      return res.json({
        message: "User Already exist",
        status: "400",
        success: false,
      });
    }

    const newUser = await createNewUser(userName, email, password);
    const authToken = await getAuthToken(newUser);

    return res.json({
      token: authToken,
      status: 200,
      success: true,
      message: "User created Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = signUp;
