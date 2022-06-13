const { user } = require("../models/user");
const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during creation
  // if (
  //   req.id &&
  //   req.firstName &&
  //   req.lastName &&
  //   req.email &&
  //   req.phoneNumber &&
  //   req.password.length >= 3
  // ) {
  //   return true;
  // }
  if (req.body.name === "Tom") {
    next();
  } else {
    res.status(400).send();
  }
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update

  next();
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
