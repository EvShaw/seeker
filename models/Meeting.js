const mongoose = require("mongoose");

const MeetingSchema = new mongoose.Schema({
  meetingDate: {
    type: String,
    required: true,
  },
  meetingTime: {
    type: String,
    required: true,
  },
  meetingType: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Meeting", MeetingSchema);
