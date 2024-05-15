const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
  brandName: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
