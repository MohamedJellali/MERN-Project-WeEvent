const mongoose = require("mongoose");
// require("dotenv").config({ path: "./config/.env"});
const config = require('config');
const MONGO_URI = config.get('MONGO_URI')

module.exports = async function () {
  try {
  
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log("...DB is connected");
  } catch (error) {
    console.log("error while connecting on DB => ", error);
  }
};
