const User = require("../../../models/CustomerPortal/User");

const findUser = async (userId) => {
  const user = await User.findOne({ _id: userId });
  return user;
};
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

  const user = await findUser(userId);

  const userUpdate = await User.updateMany(
    {
      _id: userId,
    },
    {
      $set: {
        firstName: firstName,
        lastName: lastName,
        country: country,
        phoneCode: phoneCode,
        city: city,
        state: state,
        pinCode: pinCode,
        address: address,
        phoneNumber: phoneNumber,
      },
    }
  );

  return res.send({
    success: true,
    status: 200,
    message: "Details Updated Successfully",
    userUpdate: userUpdate,
  });
};

module.exports = add_more_user_details;
