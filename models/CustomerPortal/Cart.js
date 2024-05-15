const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;
