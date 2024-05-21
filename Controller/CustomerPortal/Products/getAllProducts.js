const Product = require("../../../models/Product");

const getAllProducts = async (req, res) => {
  try {
    let allProducts = await Product.find();
    console.log("YOurrr", allProducts);
    return res.json(allProducts);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getAllProducts;
