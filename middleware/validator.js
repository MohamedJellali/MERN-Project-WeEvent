const { body, validationResult } = require("express-validator");
const User = require("../models/User");
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const RegisterRules = () => [
  body("name", "Name is required").notEmpty(),
  body("lastName", "Last name is required").notEmpty(),
  body("password", "Password must contain at least 6 characters").isLength({
    min: 6,
    max: 20,
  }),
  body("email", "Please Enter a valid Email").isEmail(),
  //mail used  or not
  body("email").custom((value) => {
    return User.findOne({ email: value }).then((user) => {
      if (user) {
        return Promise.reject("E-mail already in use");
      }
    });

  }),
];

const loginRules = () => [
  body("email", "This not a valid Email").isEmail(),
  // body('email').custom((value, { req }) => {
  //   if (!User.findOne({"email" : value})) {
  //     throw new Error('Bad Credentials !');
  //   }
  //   return true;
  // }),

  body("email").custom((value) => {
    return User.findOne({ email: value }).then((user) => {
      if (!user) {
        return Promise.reject("Bad Credentials !");
      }
    });
  }),
  // body("email", "This mail does not exist").exists(),
  body("password", "password must contains at least 6 characters").isLength({
    min: 6,
    max: 20,
  }),
  
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ errors: errors.array().map((el) => ({ msg: el.msg })) });
  }
  next();
};

module.exports = {
  validator,
  loginRules,
  RegisterRules,
};
