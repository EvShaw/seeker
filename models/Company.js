const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    // required: [true, 'A company name is required'],
  },
  companyWebsite: {
    type: String, 
    // required: true,
  },
  companyIndustry: {
    type: String, 
    // required: true,
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

module.exports = mongoose.model("Company", CompanySchema);
