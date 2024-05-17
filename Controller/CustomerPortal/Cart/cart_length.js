const Cart = require("../../../models/CustomerPortal/Cart");

const cartLength = async (req, res) => {
  const cartItems = await Cart.find({ userId: req.params.userId });
  console.log(cartItems.length);
  return res.send({
    length: cartItems.length,
  });
};

module.exports = cartLength;
