const productModel = require("../../../models/Product");

const getProducts = async (req, res) => {
  const itemPerPage = 6;
  const pageNumber = req.params.pageNumber;
  const startIndex = (pageNumber - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const aggregation = [
    {
      $match: {
        isDeleted: false,
      },
    },
    {
      $facet: {
        metaData: [
          {
            $count: "total",
          },
          {
            $addFields: {
              page: pageNumber,
            },
          },
        ],
        data: [
          {
            $skip: startIndex,
          },
          {
            $limit: itemPerPage,
          },
        ],
      },
    },
  ];
  try {
    let allProducts = await productModel.aggregate(aggregation);
    return res.send({
      allProducts: allProducts,
      success: true,
      message: "Here are your page 2 products",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getProducts;
