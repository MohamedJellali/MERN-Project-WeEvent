const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
  },
});

userSchema.pre("save", function (next) {
  if (this.email === "mohamedjjellali@gmail.com") {
    this.role = "admin";
  } else {
    this.role = "member";
  }

  next();
});

module.exports = mongoose.model("User", userSchema);
