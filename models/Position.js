const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  positionTitle: {
    type: String,
    required: true,
  },
  sourceURL: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
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

module.exports = mongoose.model("Position", PositionSchema);
