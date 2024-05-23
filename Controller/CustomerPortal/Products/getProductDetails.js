const productModel = require("../../../models/Product");

const getProductDetails = async (req, res) => {
  const productId = req.params.productId;

  const product = await productModel.findOne({ _id: productId });
  if (!product) {
    return res.send({
      message: "Product doesn't exist",
      status: 400,
      success: false,
    });
  }
  return res.send({
    status: 200,
    success: true,
    message: "Here is your Product",
    product: product,
  });
};

module.exports = getProductDetails;
