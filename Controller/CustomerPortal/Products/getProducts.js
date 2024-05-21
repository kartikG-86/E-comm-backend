const Product = require("../../../models/Product");

const getProducts = async (req, res) => {
  const itemPerPage = 6;
  const pageNumber = req.params.pageNumber;
  const startIndex = (pageNumber - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  console.log(pageNumber, startIndex, endIndex);
  try {
    let allProducts = await Product.find();
    console.log(allProducts.length);
    allProducts = allProducts.slice(startIndex, endIndex);
    console.log(allProducts);
    res.json(allProducts);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getProducts;
