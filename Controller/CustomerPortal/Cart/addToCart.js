const Cart = require("../../../models/CustomerPortal/Cart");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const Secret_Key = process.env.SECRET_KEY;

const getAuthToken = async (cartItem) => {
  const data = {
    user: {
      id: cartItem.id,
    },
  };
  const token = await jwt.sign(data, Secret_Key);
  return token;
};

const findProduct = async (productId, userId) => {
  const cartProduct = await Cart.findOne({
    productId: productId,
    userId: userId,
  });
  return cartProduct;
};

const addToCart = async (req, res) => {
  const { productId, userId, quantity } = req.body;

  var cartProduct = await findProduct(productId, userId);

  if (cartProduct) {
    cartProduct = await Cart.updateOne(
      { _id: cartProduct.id },
      { $set: { quantity: cartProduct.quantity + Number(quantity) } }
    );
    return res.send({
      status: 200,
      success: true,
      message: " Your Item added to cart🎉🎉",
    });
  }

  const cartItem = await Cart.create({
    productId: productId,
    userId: userId,
    quantity: Number(quantity),
  });

  const token = await getAuthToken(cartItem);

  return res.send({
    token: token,
    status: 200,
    success: true,
    message: "Your Item added to cart🎉🎉",
  });
};

module.exports = addToCart;
