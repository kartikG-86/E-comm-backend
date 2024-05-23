const userModel = require("../../../models/CustomerPortal/User");

const add_more_user_details = async (req, res) => {
  const {
    firstName,
    lastName,
    country,
    phoneCode,
    city,
    state,
    pinCode,
    address,
    phoneNumber,
    userId,
  } = req.body;

  const addressDetails = {
    address: address,
    name: firstName + " " + lastName,
    phoneNumber: phoneCode + " " + phoneNumber,
    firstName: firstName,
    lastName: lastName,
    country: country,
    phoneCode: phoneCode,
    city: city,
    state: state,
    pinCode: pinCode,
    address: address,
    phoneNumber: phoneNumber,
  };
  await userModel.updateOne(
    {
      _id: userId,
    },
    {
      $push: { addresses: addressDetails },
    }
  );

  return res.send({
    success: true,
    status: 200,
    message: "Details Updated Successfully",
  });
};

module.exports = add_more_user_details;
