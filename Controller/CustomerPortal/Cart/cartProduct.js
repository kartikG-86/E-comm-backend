const Cart = require("../../../models/CustomerPortal/Cart");
const Product = require("../../../models/Product");
const User = require("../../../models/CustomerPortal/User");

const findCartProducts = async (userId) => {
  const cartItems = await Cart.find({ userId: userId });
  console.log("Your cart Items", cartItems);
  const cartProducts = [];

  if (cartItems.length > 0) {
    // Use Promise.all to wait for all async operations to complete
    await Promise.all(
      cartItems.map(async (item) => {
        console.log("Your Item", item);
        const getProduct = await Product.findById(item.productId); // Assuming Product.findById() is correct
        if (getProduct) {
          // console.log(item.quantity);
          let cartProduct = { ...getProduct.toObject() };
          cartProduct.quantity = item.quantity;
          cartProduct.cartId = item._id;
          console.log("Your cart Quantity", cartProduct.quantity);
          cartProducts.push(cartProduct);
        }
      })
    );
  }
  console.log("Your Finnal Cart Product", cartProducts);

  return cartProducts;
};

const getCartProducts = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  const cartItems = await findCartProducts(userId);
  // console.log("cart Items", cartItems);
  res.json(cartItems);
};

module.exports = getCartProducts;
