const router = require("express").Router();
const Event = require("../models/Event");
const {
  validatorEvent,
  addEventRules,
} = require("../middleware/eventValidators");

//add event
router.post("/add", addEventRules(), validatorEvent, async (req, res) => {
  const {
    nameOfEvent,
    description,
    category,
    activity,
    address,
    city,
    governorate,
    date,
    organizer,
    participant,
  } = req.body;
  try {
    let event = new Event({
      nameOfEvent,
      description,
      category,
      activity,
      address,
      city,
      governorate,
      date,
      organizer,
      participant,
    });
    await event.save();
    res.status(200).send({
      msg: "saving event with success",
      event,
    });
  } catch (error) {
    res.status(500).send({ msg: "error while adding event", error });
  }
});

// get all events
router.get("/allevents", async (req, res) => {
  const allEvents = await Event.find({});
  res.status(200).send({ allEvents });
});

//participate

router.put("/participate", async (req, res) => {
  const { userId, eventId } = req.body;
  await Event.findOneAndUpdate(
    { _id: eventId },
    { $push: { participant: userId } },
    { useFindAndModify: false }
  );
  try {
    res.status(200).send({
      msg: "participate with success",
    });
  } catch (error) {
    res.status(500).send({ msg: "error while update participant", error });
  }
});
//unparticipate to an event
router.put("/unparticipate", async (req, res) => {
  const { userId, eventId } = req.body;
  await Event.findOneAndUpdate(
    { _id: eventId },
    { $pull: { participant: userId } },
    { useFindAndModify: false }
  );
  try {
    res.status(200).send({
      msg: "delete with success",
    });
  } catch (error) {
    res.status(500).send({ msg: "error while delete participant", error });
  }
});

//Delete event router

router.delete("/delete", async (req, res) => {
  // console.log("object", req.body)
  // const {eventId} = req.body;
  // console.log("eventid", eventId)
  await Event.findOneAndDelete(req.body);
  try {
    res.status(200).send({
      msg: "delete event with success",
    });
  } catch (error) {
    res.status(500).send({ msg: "error while deleting event", error });
  }
});

// update event
router.put("/update", addEventRules(), validatorEvent, async (req, res) => {
  // console.log("req.body update : ", req.body);
  const {
    _id,
    nameOfEvent,
    description,
    category,
    activity,
    address,
    city,
    governorate,
    date,
  } = req.body;
  // console.log(_id)
  await Event.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        nameOfEvent: nameOfEvent,
        description: description,
        category: category,
        activity: activity,
        address: address,
        city: city,
        governorate: governorate,
        date: date,
      },
    },
    { useFindAndModify: false }
  );
  // await Event.findOneAndUpdate({ _id: req.body_id }, {$set : req.body}, { useFindAndModify: false } );
  try {
    res.status(200).send({
      msg: "update event with success",
    });
  } catch (error) {
    res.status(500).send({ msg: "error while updating event", error });
  }
});

module.exports = router;
