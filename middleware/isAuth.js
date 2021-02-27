
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const secretOrKey = config.get('secretOrKey');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if(!token){
        return res.status(400).send({msg: "Unauthorized"});
    }
    const decoded = await jwt.verify(token, secretOrKey);
    const user =  await User.findById(decoded._id).select("-password");
    if(!user){
        return res.status(400).send({msg: "Unauthorized !"});
    }

  req.user = user;
  } catch (error) {
    console.log(error)
    return res.status(500).send({ msg: "Unauthorized !!"})
  }
  next();
};




// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const passport = require("passport");
// const User = require("../models/User");
// const config = require("config");
// const secretOrKey = config.get('secretOrKey');

// const opts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey,
// };

// passport.initialize();
// passport.use(
//   new JwtStrategy(opts, async (jwt_payload, done) => {
//     const { id } = jwt_payload;
//     console.log("keypayload", jwt_payload, "id", id);
//     try {
//       const user = await User.findById(id).select("-password");
//       user ? done(null, user) : done(null, false);
//     } catch (error) {
//       console.log("error in passport", error);
//     }
//   })
// );
// module.exports = isAuth = () =>
//   passport.authenticate("jwt", { session: false });

//method2

