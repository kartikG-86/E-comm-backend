const Order = require("../../../models/CustomerPortal/Order");
const Product = require("../../../models/Product");

const findOrder = async (orderId) => {
  const order = await Order.findOne({ _id: orderId });
  return order;
};

const findProduct = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};

const getOrderDetails = async (req, res) => {
  const orderId = await req.params.orderId;
  console.log(orderId);
  const order = await findOrder(orderId);

  return res.send({
    orderDetails: order,
  });
};

module.exports = getOrderDetails;
