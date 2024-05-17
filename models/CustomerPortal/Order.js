const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
