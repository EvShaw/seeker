const Company = require("../models/Company");
const Contact = require("../models/Contact");


module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  newCompany: async (req, res) => {
    try {
      const companies = await Company.find({ user: req.user.id }).sort({ createdAt: "asc" });
      const contacts = await Contact.find({ user: req.user.id })
      res.render("newCompany.ejs", { companies: companies, user: req.user, contacts: contacts });
    } catch (err) {
      console.log(err);
    }
  },
  newContact: async (req, res) => {
    try {
      const companies = await Company.find({ user: req.user.id }).sort({ createdAt: "asc" });
      const contacts = await Contact.find({ user: req.user.id })
      res.render("newContact.ejs", { companies: companies, user: req.user, contacts: contacts });
    } catch (err) {
      console.log(err);
    }
  }
};



