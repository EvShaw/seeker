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
      const contacts = await Contact.find({ company: req.params.id }).sort({ createdAt: "desc" }).lean();
      const positions = await Position.find({ company: req.params.id })

      const dateCreated = company.createdAt
      console.log(company)

      res.render("company.ejs", { company: company, user: req.user, contacts: contacts, positions: positions });
    } catch (err) {
      console.log(err);
    }
  },
  createCompany: async (req, res) => {
    try {
      await Company.create({
        name: req.body.name,
        website: req.body.website,
        industry: req.body.industry,
        user: req.user.id,
      });
      console.log("A new company has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  deleteCompany: async (req, res) => {
    try {
      await Company.deleteOne({ _id: req.params.id })
      console.log(`Deleting ${req.params.id}`);
      res.redirect("/profile");
    } catch (err) {
      console.error(err)
    }
  },
  addNewPosition: async (req, res) => {
    console.log('lets make a new role!!')
    console.log(req.params.id)
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
      const position = await Position.findById({ _id: req.params.id})
  
      await Position.deleteOne({ _id: position.id })
      console.log(`Deleting ${position.id}`);

      res.redirect(`/company/${position.company}`)
     
    } catch(err) {
      console.error(err)
    }
  },
  addNewContact: async (req, res) => {

    try {

    } catch(err) {
      console.error(err)
    }
  },
  createNewContact: async (req, res) => {

    try {

    } catch(err) {
      console.error(err)
    }
  },
  deleteNewContact: async (req, res) => {

    try {

    } catch(err) {
      console.error(err)
    }
  },
}
