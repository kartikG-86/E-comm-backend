const Cart = require("../../../models/CustomerPortal/Cart");

const cartLength = async (req, res) => {
  const cartItems = await Cart.find({ userId: req.params.userId });
  return res.send({
    length: cartItems.length,
  });
};

module.exports = cartLength;
