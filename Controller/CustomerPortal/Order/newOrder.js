const Order = require("../../../models/CustomerPortal/Order");
const Cart = require("../../../models/CustomerPortal/Cart");
const Product = require("../../../models/Product");
const User = require("../../../models/CustomerPortal/User");
const findProduct = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};
const findUser = async (userId) => {
  const user = await User.findOne({ _id: userId });
  return user;
};
const newOrder = async (req, res) => {
  const { orders, address } = req.body;
  let userId = "";

  let database_orders = await Order.find();
  let orderId = database_orders.length;
  // placed Orders
  orders.map(async (item) => {
    userId = item.placedUserId;
    const user = await findUser(userId);
    const product = await findProduct(item.productId);
    orderId = orderId + 1;
    const new_order = await Order.create({
      productId: item.productId,
      placedUserId: item.placedUserId,
      quantity: item.quantity,
      title: product.title,
      imgUrl: product.imgUrl,
      category: product.category,
      gender: product.gender,
      originalPrice: product.originalPrice,
      finalPrice: product.finalPrice,
      brandName: product.brandName,
      userName: address.firstName + " " + address.lastName,
      email: user.email,
      phoneNumber: address.phoneNumber,
      shippingAddress: address.address,
      shippingStatus: "On Processing",
      senderAddress: product.senderAddress,
      senderUserId: product.userId,
      senderCity: product.senderCity,
      senderCountry: product.senderCountry,
      shippingCity: address.city,
      shippingCountry: address.country,
      estimatedDeliveryDate: product.estimatedDelivery,
      phoneCode: address.phoneCode,
      orderId: "order_" + orderId,
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
