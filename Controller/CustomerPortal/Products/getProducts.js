const Product = require("../../../models/Product");

const getProducts = async (req, res) => {
  const itemPerPage = 6;
  const pageNumber = req.params.pageNumber;
  const startIndex = (pageNumber - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  try {
    let allProducts = await Product.find();
    allProducts = allProducts.slice(startIndex, endIndex);
    res.json(allProducts);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getProducts;
