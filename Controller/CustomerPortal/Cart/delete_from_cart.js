const Cart = require("../../../models/CustomerPortal/Cart");
var jwt = require("jsonwebtoken");

const Secret_Key = process.env.SECRET_KEY;

const getAuthToken = async (cartItem) => {
  const data = {
    user: {
      id: cartItem.id,
    },
  };
  const token = await jwt.sign(data, Secret_Key);
  return token;
};

const findItem = async (cartId) => {
  const item = await Cart.findOne({ _id: cartId });
  return item;
};

const deleteItem = async (req, res) => {
  const cartId = req.params.cartId;

  let item = await findItem(cartId);
  if (!item) {
    return res.send({
      success: false,
      status: 400,
      message: "Item not present",
    });
  }

  item = await Cart.deleteOne({ _id: cartId });

  const token = await getAuthToken(item);
  return res.send({
    token: token,
    status: 200,
    success: true,
    message: "Your item Deleted",
  });
};

module.exports = deleteItem;
