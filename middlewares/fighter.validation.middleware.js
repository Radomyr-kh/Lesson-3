const { fighter } = require("../models/fighter");

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during creation
  // When creating a fighter - all fields are required, except for id and health
  if (fighter.name && fighter.power && fighter.defense) {
    next();
  } else {
    res.status(400).send();
    console.log("One of the required fields is missing");
  }
  // next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during update
  next();
};

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
