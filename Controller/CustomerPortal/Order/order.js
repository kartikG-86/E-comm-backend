const Order = require("../../../models/CustomerPortal/Order");
const Product = require("../../../models/Product");

const findOrders = async (userId) => {
  const orders = await Order.find({ userId: userId });
  //   console.log("Your Orders", orders);
  return orders;
};

const orderProductDetails = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};
const getOrders = async (req, res) => {
  const userId = req.params.userId;

  const userOrders = await findOrders(userId);

  let orders = [];

  if (userOrders.length == 0) {
    return res.send({
      status: 400,
      success: false,
      message: "You haven't placed any order yet",
    });
  }

  for (const item of userOrders) {
    let orderProduct = await orderProductDetails(item.productId);
    orderProduct = { ...orderProduct._doc, orderId: item._id }; // Spread existing keys and add new key
    console.log(orderProduct);
    orders.push(orderProduct);
  }

  console.log("Final Orders", orders);
  return res.send({
    orders: orders,
    status: 200,
    success: true,
    message: "Here are your orders !!",
  });
};

module.exports = getOrders;
