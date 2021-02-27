const router = require("express").Router();
const User = require("../models/User");

//get all users
router.get("/getusers", async (req, res) => {
    try {
      const allUsers = await User.find({});
      res.status(200).send({ allUsers });
    } catch (error) {
      console.log(error)
    }
  
    router.get("/test", async (req, res) => {
        const {userId} = req.body;
        await Event.findOne({_id: userId})
        try {
          res.status(200).send({
            msg: "getting user with success",
          });
        } catch (error) {
          res.status(500).send({ msg: "error while etting user", error });
        }
      });
  });
module.exports = router;
