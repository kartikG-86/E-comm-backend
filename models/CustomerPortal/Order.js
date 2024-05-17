const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  placedUserId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
