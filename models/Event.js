const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  nameOfEvent: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  governorate: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    get: (value) => value.toTimeString(),
    get: (value) => value.toDateString("yyyy-MM-dd"),
  },
  organizer: {
    type: String,
    required: true,
  },
  participant: {
    type: [String],
    required: true,
  },
  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
});

module.exports = mongoose.model("Event", eventSchema);
