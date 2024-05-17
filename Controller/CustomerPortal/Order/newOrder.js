const Order = require("../../../models/CustomerPortal/Order");

const newOrder = async (req, res) => {
  const { userId, productId } = req.body;

  const new_order = await Order.create({
    productId: productId,
    userId: userId,
  });

  return res.send({
    status: 200,
    success: true,
    message: "Order Placed Successfully",
  });
};

module.exports = newOrder;
