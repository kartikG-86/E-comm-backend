const bcrypt = require("bcryptjs");
const AdminUser = require("../../../models/AdminPortal/AdminUser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const findUser = async (email) => {
  const user = await AdminUser.findOne({ email: email });
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

const createNewUser = async (name, email, password, brandName) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  const newUser = await AdminUser.create({
    name: name,
    email: email,
    password: secPass,
    brandName: brandName,
  });

  return newUser;
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, brandName } = req.body;
    const user = await findUser(email);

    if (user) {
      return res.json({
        error: "User Already exist",
        status: "400",
        success: false,
      });
    }

    const newUser = await createNewUser(name, email, password, brandName);
    const authToken = await getAuthToken(newUser);

    return res.json({
      token: authToken,
      success: true,
      message: "User created Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = signUp;
