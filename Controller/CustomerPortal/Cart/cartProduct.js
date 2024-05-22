const Cart = require("../../../models/CustomerPortal/Cart");
const Product = require("../../../models/Product");

const findCartProducts = async (userId) => {
  const cartItems = await Cart.find({ userId: userId });
  const cartProducts = [];

  if (cartItems.length > 0) {
    // Use Promise.all to wait for all async operations to complete
    await Promise.all(
      cartItems.map(async (item) => {
        const getProduct = await Product.findById(item.productId); // Assuming Product.findById() is correct
        if (getProduct) {
          let cartProduct = { ...getProduct.toObject() };
          cartProduct.quantity = item.quantity;
          cartProduct.cartId = item._id;
          cartProducts.push(cartProduct);
        }
      })
    );
  }
  return cartProducts;
};

const getCartProducts = async (req, res) => {
  const userId = req.params.userId;

  const cartItems = await findCartProducts(userId);

  return res.json(cartItems);
};

module.exports = getCartProducts;
