const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
  address: {
    type: String,
  },
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // firstName: {
  //   type: String,
  //   default: "",
  // },
  // lastName: {
  //   type: String,
  //   default: "",
  // },
  password: {
    type: String,
    required: true,
  },
  // country: {
  //   type: String,
  //   default: "",
  // },
  // phoneNumber: {
  //   type: String,
  //   default: "",
  // },
  // city: {
  //   type: String,
  //   default: "",
  // },
  // state: {
  //   type: String,
  //   default: "",
  // },
  // phoneCode: {
  //   type: String,
  //   default: "",
  // },
  // pinCode: {
  //   type: String,
  //   default: "",
  // },
  addresses: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
