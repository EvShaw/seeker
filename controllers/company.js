const Company = require("../models/Company");
const Contact = require("../models/Contact");
const Position = require("../models/Position");


module.exports = {
  getProfile: async (req, res) => {
    try {
      const companies = await Company.find({ user: req.user.id }).sort({ createdAt: "asc" });
      const contacts = await Contact.find({ user: req.user.id })
      const positions = await Position.find({ user: req.user.id })

      res.render("profile.ejs", { companies: companies, user: req.user, contacts: contacts, positions: positions });

    } catch (err) {
      console.log(err);
    }
  },
  getCompany: async (req, res) => {
    try {
      const company = await Company.findById(req.params.id);
      const positions = await Position.find({ company: req.params.id })
      const contacts = await Contact.find({ company: req.params.id })

      res.render("company.ejs", { company: company, user: req.user, contacts: contacts, positions: positions });
    } catch (err) {
      console.log(err);
    }
  },
  addNewCompany: async (req, res) => {
//    console.log(req.user.id)
    res.render('addNewCompany.ejs', {user: req.user.id})
  },
  createNewCompany: async (req, res) => {

    try {
      await Company.create({
        companyName: req.body.companyName,
        companyWebsite: req.body.companyWebsite,
        companyIndustry: req.body.companyIndustry,
        user: req.user.id,
      });
      console.log("A new company has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }

  },
  deleteCompany: async (req, res) => {
    console.log('deleting the company!')
   
    try {
      const company = await Company.findById(req.params.id);

      const contacts = await Contact.find({ company: req.params.id});
      const positions = await Position.find({ company: req.params.id});
      
      await Position.deleteMany({company: req.params.id })
      await Contact.deleteMany({company: req.params.id })
      await Company.deleteOne({ _id: req.params.id})

      res.redirect(`/profile`);
    } catch (err) {
      console.error(err)
    }
  },
  addNewPosition: async (req, res) => {
    console.log('lets make a new role!!')
    try {
      const company = await Company.findById(req.params.id);

      res.render('addNewPosition.ejs', { company: company, user: req.user, })
    } catch (err) {
      console.error(err)
    }
  },
  createNewPosition: async (req, res) => {
    console.log('creating it!')

    try {
      await Position.create({
        positionTitle: req.body.positionTitle,
        sourceURL: req.body.sourceURL,
        company: req.params.id,
        user: req.user.id,
      });

      res.redirect(`/company/${req.params.id}`);
    } catch (err) {
      console.error(err)
    }
  },
  deletePosition: async (req, res) => {

    try {
      const position = await Position.findById({ _id: req.params.id })

      await Position.deleteOne({ _id: position.id })
      console.log(`Deleting ${position.id}`);

      res.redirect(`/company/${position.company}`)

    } catch (err) {
      console.error(err)
    }
  },
  addNewContact: async (req, res) => {
    console.log('')
    try {
      const company = await Company.findById(req.params.id);

      res.render('addNewContact.ejs', { company: company, user: req.user, })
    } catch (err) {
      console.error(err)
    }
  },
  createNewContact: async (req, res) => {
    console.log('new contacted created')
    try {
      await Contact.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactTitle: req.body.contactTitle,
        contactWebsite: req.body.contactWebsite,
        contactLinkedIn: req.body.contactLinkedIn,
        contactTwitter: req.body.contactTwitter,
        company: req.params.id,
        user: req.user.id,
      })

      res.redirect(`/company/${req.params.id}`);
    } catch (err) {
      console.error(err)
    }
  },
  deleteContact: async (req, res) => {
    console.log('')
    try {
      const contact = await Contact.findById({ _id: req.params.id })

      await Contact.deleteOne({ _id: contact.id })
      console.log(`Deleting ${contact.id}`);

      res.redirect(`/company/${contact.company}`)
    } catch (err) {
      console.error(err)
    }
  },
}
