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
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  phoneCode: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  shippingStatus: {
    type: String,
    required: true,
  },
  senderAddress: {
    type: String,
    required: true,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
  senderUserId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  placedDate: {
    type: Date,
    default: Date.now,
  },
  estimatedDeliveryDate: {
    type: Number,
    required: true,
  },
  senderCity: {
    type: String,
    required: true,
  },
  senderCountry: {
    type: String,
    required: true,
  },
  shippingCity: {
    type: String,
    required: true,
  },
  shippingCountry: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
