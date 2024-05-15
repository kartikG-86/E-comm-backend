const Product = require("../../../models/Product");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    console.log(allProducts);
    res.json(allProducts);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getProducts;
