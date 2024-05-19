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
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    requierd: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  finalPrice: {
    type: Number,
  },
  gender: {
    type: String,
    requierd: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
