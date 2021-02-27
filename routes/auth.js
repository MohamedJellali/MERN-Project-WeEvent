const router = require("express").Router();
const bcrypt = require("bcrypt"); //hashage
const User = require("../models/User"); //import schema
const jwt = require("jsonwebtoken"); // import jwt
const config = require("config");
const secretOrKey = config.get("secretOrKey");
const {
  validator,
  loginRules,
  RegisterRules,
} = require("../middleware/validator"); // import validators

const isAuth = require("../middleware/isAuth"); // import isAuth (passport)

router.post("/register", RegisterRules(), validator, async (req, res) => {
  const { name, lastName, email, password, role } = req.body;
  try {
    // serach user sent in the request
    let user = await User.findOne({ email });
    //verify if the new user exits in DB
    if (user) {
      return res.status(400).send({ msg: "User already exist !" });
    }
    //create a new user
    user = new User({ name, lastName, email, password, role });
    //hash the password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;

    //save the new user
    await user.save();
    //.send and .json does the same work !

    const payload = {
      _id: user._id,
    };

    const token = await jwt.sign(payload, secretOrKey);

    res.status(200).send({
      msg: "Welcome, register Success",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ msg: "error while register new user", error });
  }
});

//elemin the password
const eleminPassword = ({ name, lastName, email, role, _id }) => ({
  name,
  lastName,
  email,
  role,
  _id,
});
//login
router.post("/login", loginRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Bad Credentials !" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Bad Credentials !!" });
    }

    // sign the User (token)

    const payload = {
      _id: user._id,
    };

    const token = await jwt.sign(payload, secretOrKey);

    res.send({
      msg: "Welcome, Login Success",
      user: eleminPassword(user),
      token,
    });
  } catch (error) {
    res.status(500).json({ msg: "error while login user", error });
  }
});

//private route

router.get("/me", isAuth, (req, res) => {
  res.status(200).send({ user: req.user });
});

router.get("/getusers", async (req, res) => {
  try {
    const allUsers = await User.find({});
    // {console.log(allUsers);}
    res.status(200).send({ allUsers });
  } catch (error) {
    console.log("error while getting users",error)
  }
});

//delete user

router.delete("/delete", async (req, res) => {
  // console.log("req body : ",req.body)
  const {userId} = req.body;
  // console.log('userId :', userId)
  await User.findOneAndDelete({_id: userId})
  try {
    res.status(200).send({
      msg: "delete user with success",
    });
  } catch (error) {
    res.status(500).send({ msg: "error while deleting user", error });
  }
});


module.exports = router;

//to reduce the code lines, it will be much better if I write the
//functions of Register and Login separated in another file named
// for example authController.js
//and then I import them here
