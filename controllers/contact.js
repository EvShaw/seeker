const Company = require("../models/Company");
const Contact = require("../models/Contact");
const User = require("../models/User");


module.exports = {
  createContact: async (req, res) => {
    try {
      const contactUser = await User.findById(req.user.id)

      await Contact.create({
        firstName: req.body.firstName,
        // lastName: req.body.lastName,  
        // contactWebsite: req.body.contactWebsite,
        // contactTitle: req.body.contactTitle,
        company: req.params.id,
        user: req.user.id,
      });
      console.log("A new contact has been added!");
      res.redirect("/company/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteContact: async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id)
      const company = contact.company

      await Contact.deleteOne({ _id: req.params.id })

      res.redirect(`/company/${company}`);
    } catch (err) {
      console.error(err)
    }
  },
  getContact: async (req, res) => {
    try {
      const company = await Company.findById(req.params.id);
      const contacts = await Contact.findById(req.params.id)

      res.render("contact", { user: req.user, contacts: contacts });
    } catch (err) {
      console.log(err);
    }
  },
};