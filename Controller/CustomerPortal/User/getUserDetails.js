const User = require("../../../models/CustomerPortal/User");

const getUser = async (req, res) => {
  const userId = req.params.userId;

  const user = await User.findOne({ _id: userId });

  return res.send({
    user: user,
    success: true,
    status: 200,
  });
};

module.exports = getUser;
