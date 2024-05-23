const productModel = require("../../../models/Product");

const getCategoryProducts = async (req, res) => {
  const category = req.params.category;
  const subCategory = req.params.subCategory;
  const aggregation = [
    {
      $addFields: {
        category: {
          $toLower: "$category",
        },
        gender: {
          $toLower: "$gender",
        },
      },
    },
    {
      $match: {
        category: new RegExp(category.toLowerCase()),
        gender: new RegExp(subCategory.toLowerCase()),
      },
    },
  ];
  let products = await productModel.aggregate(aggregation);
  return res.send({
    status: 200,
    success: true,
    products: products,
    message: "Here are your's category wise products",
  });
};

module.exports = getCategoryProducts;
