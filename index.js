const connectToMongo = require("./db");
var cors = require("cors");
connectToMongo();

const express = require("express");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! I am kartik");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// customer Portal
app.use("/api/auth", require("./routes/CustomerPortal/auth"));
app.use("/api/products", require("./routes/CustomerPortal/products"));
app.use("/api/cart", require("./routes/CustomerPortal/cart"));

// admin Portal
app.use("/api/auth/admin", require("./routes/AdminPortal/adminAuth"));
app.use(
  "/api/auth/admin/product",
  require("./routes/AdminPortal/admin_Product")
);
