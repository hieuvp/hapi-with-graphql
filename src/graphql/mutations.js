const User = require('../mongodb/user');

const createUser = (root, args, context) => {
  const user = new User(args);
  return user.save();
};

module.exports = {
  createUser
};
