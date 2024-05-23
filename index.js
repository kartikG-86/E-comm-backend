const connectToMongo = require("./db");
var cors = require("cors");
connectToMongo();

const express = require("express");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const auth = require("./routes/CustomerPortal/auth");
const products = require("./routes/CustomerPortal/products");
const cart = require("./routes/CustomerPortal/cart");
const orders = require("./routes/CustomerPortal/order");
const admin = require("./routes/AdminPortal/adminAuth");
const adminProducts = require("./routes/AdminPortal/admin_Product");
// customer Portal
app.use("/api/auth", auth);
app.use("/api/products", products);
app.use("/api/cart", cart);

app.use("/api/orders", orders);

// admin Portal
app.use("/api/auth/admin", admin);
app.use("/api/auth/admin/product", adminProducts);
