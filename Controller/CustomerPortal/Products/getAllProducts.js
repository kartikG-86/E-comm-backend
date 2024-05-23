const productModel = require("../../../models/Product");

const getAllProducts = async (req, res) => {
  try {
    let allProducts = await productModel.find();
    return res.json({
      allProducts: allProducts,
      success: true,
      message: "Here are your all products",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getAllProducts;
