const orderModel = require("../../../models/CustomerPortal/Order");
const productModel = require("../../../models/Product");

const findOrder = async (orderId) => {
  const order = await orderModel.findOne({ _id: orderId });
  return order;
};

const getOrderDetails = async (req, res) => {
  const orderId = await req.params.orderId;
  const order = await findOrder(orderId);

  return res.send({
    orderDetails: order,
    success: true,
    message: "Here are your orders",
  });
};

module.exports = getOrderDetails;
