const { body, validationResult } = require("express-validator");

const RegisterRules = () => [
  body("name", "Name is required").notEmpty(),
  body("lastName", "Last name is required").notEmpty(),
  body("password", "password must contains at least 6 characters").isLength({
    min: 6,
    max: 20,
  }),
  body("email", "This not a valid Email").isEmail(),
];

const loginRules = () => [
  body("email", "This not a valid Email").isEmail(),
  body("password", "password must contains at least 6 characters").isLength({
    min: 6,
    max: 20,
  }),
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array().map(el => ({msg : el.msg,})) });
  }
  next();
};

module.exports = {
  validator,
  loginRules,
  RegisterRules,
};
