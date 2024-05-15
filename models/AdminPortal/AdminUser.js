const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  brandName: {
    type: String,
    requried: true,
  },
});

const AdminUser = mongoose.model("adminUser", AdminUserSchema);
module.exports = AdminUser;
