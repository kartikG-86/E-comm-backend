const Order = require("../../../models/CustomerPortal/Order");
const Cart = require("../../../models/CustomerPortal/Cart");
const Product = require("../../../models/Product");

const findProduct = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};
const newOrder = async (req, res) => {
  const { orders } = req.body;
  let userId = "";

  // placed Orders
  orders.map(async (item) => {
    userId = item.placedUserId;
    const product = await findProduct(item.productId);
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
