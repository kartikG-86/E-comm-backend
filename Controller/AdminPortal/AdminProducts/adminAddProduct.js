const AdminUser = require("../../../models/AdminPortal/AdminUser");
const Product = require("../../../models/Product");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const getProducts = require("../../CustomerPortal/Products/getProducts");

const Secret_Key = process.env.SECRET_KEY;

const getAdminUser = async (email) => {
  const user = await AdminUser.findOne({ email: email });
  return user;
};

// check by brandName
const checkBrandName = async (brandName) => {
  const product = await Product.find({ brandName: brandName });
  return product;
};

const getAuthToken = async (product) => {
  const data = {
    user: {
      id: product.id,
    },
  };
  const token = await jwt.sign(data, Secret_Key);
  return token;
};

const addNewProduct = async (
  title,
  imgUrl,
  category,
  gender,
  originalPrice,
  finalPrice,
  admin_user,
  estimatedDelivery,
  senderAddress,
  senderCity,
  senderCountry
) => {
  const newProduct = await Product.create({
    title: title,
    imgUrl: imgUrl,
    category: category,
    gender: gender,
    originalPrice: originalPrice,
    finalPrice: finalPrice,
    brandName: admin_user.brandName,
    userId: admin_user.id,
    estimatedDelivery: estimatedDelivery,
    senderAddress: senderAddress,
    senderCity: senderCity,
    senderCountry: senderCountry,
  });
  return newProduct;
};

const findProductByTitle = (products, title) => {
  const product = products.find((item) => item.title == title);
  return product;
};

const addProduct = async (req, res) => {
  const {
    title,
    imgUrl,
    category,
    gender,
    originalPrice,
    finalPrice,
    userEmail,
    estimatedDelivery,
    senderAddress,
    senderCity,
    senderCountry,
  } = req.body;

  const admin_user = await getAdminUser(userEmail);

  const products = await checkBrandName(admin_user.brandName);

  const findProduct = findProductByTitle(products, title);

  if (findProduct !== undefined) {
    return res.send({
      error:
        "Product with Same Title Already Exist. Please enter different title :(",
      status: 400,
      success: false,
    });
  }

  // add product to database
  const newProduct = await addNewProduct(
    title,
    imgUrl,
    category,
    gender,
    originalPrice,
    finalPrice,
    admin_user,
    estimatedDelivery,
    senderAddress,
    senderCity,
    senderCountry
  );

  const token = await getAuthToken(newProduct);
  return res.send({
    token: token,
    message: "Your Product added successfully 🎉🎉",
    status: 200,
    success: true,
  });
};

module.exports = addProduct;
