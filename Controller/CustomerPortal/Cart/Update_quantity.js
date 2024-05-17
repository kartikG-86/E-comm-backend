const Cart = require("../../../models/CustomerPortal/Cart");

const findItem = async (productId) => {
  const item = await Cart.findOne({ productId: productId });
  return item;
};

const increaseQuantity = async (req, res) => {
  const { productId, quantity } = req.body;

  let item = await findItem(productId);
  if (!item) {
    return res.send({
      success: 400,
      status: false,
      message: "Item not present",
    });
  } else {
    item = await Cart.updateOne(
      { productId: productId },
      { $set: { quantity: quantity } }
    );

    return res.send({
      status: 200,
      success: true,
      message: "Item Updated Successfully",
    });
  }
};

module.exports = increaseQuantity;
