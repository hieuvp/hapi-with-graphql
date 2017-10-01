const User = require('../mongodb/user');

const getUserById = (root, args, context) => {
  const { id } = args;
  return User.findById(id);
};
const getUserByEmail = (root, args, context) => {
  const { email } = args;
  return User.findOne({ email });
};

module.exports = {
  getUserById,
  getUserByEmail
};
