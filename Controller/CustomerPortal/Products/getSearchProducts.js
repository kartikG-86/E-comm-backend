const productModel = require("../../../models/Product");

const getSearchProducts = async (req, res) => {
  const searchQuery = req.params.searchQuery;
  try {
    const aggregation = [
      {
        $addFields: {
          title: {
            $toLower: "$title",
          },
        },
      },
      {
        $match: {
          title: new RegExp(searchQuery.toLowerCase()),
        },
      },
    ];
    let allProducts = await productModel.aggregate(aggregation);
    if (allProducts && allProducts.length > 0) {
      return res.json({
        allProducts: allProducts,
        success: true,
        message: "Your search products",
      });
    } else {
      return res.status(400).json({
        message: "Product not available",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = getSearchProducts;
