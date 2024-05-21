const Product = require("../../../models/Product");

const getSearchProducts = async (req, res) => {
  const searchQuery = req.params.searchQuery;
  try {
    let allProducts = await Product.find();
    let searchedProducts = [];
    allProducts.map((item) => {
      if (item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        searchedProducts.push(item);
      }
    });
    res.json(searchedProducts);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getSearchProducts;
