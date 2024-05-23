const orderModel = require("../../../models/CustomerPortal/Order");

const findOrders = async (userId) => {
  const orders = await orderModel.find({ placedUserId: userId });
  return orders;
};

const getOrders = async (req, res) => {
  const userId = req.params.userId;

  const userOrders = await findOrders(userId);

  if (userOrders.length == 0) {
    return res.send({
      status: 400,
      success: false,
      message: "You haven't placed any order yet",
    });
  }

  return res.send({
    orders: userOrders,
    status: 200,
    success: true,
    message: "Here are your orders !!",
  });
};

module.exports = getOrders;
