const { body, validationResult } = require("express-validator");

const addEventRules = () => [
  body("nameOfEvent", "Please set a name for the event").notEmpty(),
  body("description", "Please describe the event in max 100 letters")
    .notEmpty()
    .isLength({
      min: 12,
      max: 100,
    }),
  body("category", "Please choose a category").notEmpty(),
  body("activity", "Please choose an activity").notEmpty(),
  body("address", "Please add an address").notEmpty(),
  body("city", "Please add an address").notEmpty(),
  body(
    "governorate",
    "Please specify the governorate where you want organize the event"
  ).notEmpty(),
  body("date", "Please specify the date and time of the event").notEmpty(),

];



const validatorEvent = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ errors: errors.array().map((el) => ({ msg: el.msg })) });
  }
  next();
};

module.exports = { addEventRules, validatorEvent };
