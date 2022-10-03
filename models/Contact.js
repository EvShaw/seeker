const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactTitle: {
    type: String, 
    required: true,
  },
  contactWebsite: {
    type: String, 
  },
  contactLinkedIn: {
    type: String, 
  },
  contactTwitter: {
    type: String, 
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

module.exports = mongoose.model("Contact", ContactSchema);
