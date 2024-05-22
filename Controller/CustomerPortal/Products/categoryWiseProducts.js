const Products = require("../../../models/Product");

const getCategoryProducts = async (req, res) => {
  const category = req.params.category;
  const subCategory = req.params.subCategory;

  let products = await Products.find();
  let newProducts = [];
  products.map((item) => {
    if (
      item.category.toLowerCase() == category.toLowerCase() &&
      item.gender.toLowerCase() == subCategory.toLowerCase()
    ) {
      newProducts.push(item);
    }
  });

  return res.send({
    status: 200,
    success: true,
    products: newProducts,
    message: "Here are your's category wise products",
  });
};

module.exports = getCategoryProducts;
