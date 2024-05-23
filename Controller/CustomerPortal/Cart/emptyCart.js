const cartModel = require("../../../models/CustomerPortal/Cart");

const emptyCart = async (req, res) => {
  const userId = req.params.userId;

  await cartModel.deleteMany({ userId: userId });
  return res.send({
    message: "Your Items Deleted easily",
    status: 200,
    success: true,
  });
};

module.exports = emptyCart;
