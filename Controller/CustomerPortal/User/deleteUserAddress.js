const User = require("../../../models/CustomerPortal/User");

const deleteAddress = async (req, res) => {
  const { addressDetails, userId } = req.body;

  await User.updateOne(
    { _id: userId },
    { $pull: { addresses: { address: addressDetails.address } } }
  );

  return res.send({
    status: 200,
    success: true,
    message: "Your address removed",
  });
};

module.exports = deleteAddress;
