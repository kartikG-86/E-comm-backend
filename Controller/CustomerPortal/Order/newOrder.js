const Order = require("../../../models/CustomerPortal/Order");
const Cart = require("../../../models/CustomerPortal/Cart");
const newOrder = async (req, res) => {
  const { orders } = req.body;
  let userId = "";

  // placed Orders
  orders.map(async (item) => {
    userId = item.placedUserId;
    const new_order = await Order.create({
      productId: item.productId,
      placedUserId: item.placedUserId,
      quantity: item.quantity,
    });
  });

  // empty cart

  // const deleteItems = Cart.deleteMany({ userId: userId });

  return res.send({
    status: 200,
    success: true,
    message: "Order Placed Successfully",
  });
};

module.exports = newOrder;
