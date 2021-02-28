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
  //date in future
  // body('date').custom((value, { req }) => {
  //   var time = new Date();
  //   var houractual = time.getHours();
  //   var dayactual = time.getDay();
  //   var hour = value.getHours();
  //   var day = value.getDay();
  //   console.log(value)
  //   if (houractual > hour && dayactual > day ) {
  //     throw new Error('date must be in future');
  //   } 
  //   return true;
  // }),
];


// const myMiddleware = (req, res, next) => {
//   var time = new Date();
//   var hour = time.getHours();
//   var day = time.getDay();
//   if (day >= 1 && day < 6 && hour >= 9 && hour < 17) {
//     console.log(hour, day);
//     next();
//   } else {
//     res.render("closed");
//     console.log(hour, day);
//   }
// };

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
