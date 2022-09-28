const Company = require("../models/Company");
const Contact = require("../models/Contact");


module.exports = {
  getProfile: async (req, res) => {
    try {
      const companies = await Company.find({ user: req.user.id }).sort({ createdAt: "asc" });
      const contacts = await Contact.find({ user: req.user.id })
      res.render("profile.ejs", { companies: companies, user: req.user, contacts: contacts });
    } catch (err) {
      console.log(err);
    }
  },
  getCompany: async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    // const contacts = await Comment.find({ post: req.params.id }).sort({ createdAt: "asc" }).lean();         

    res.render("company.ejs", { company: company, user: req.user,});
  } catch (err) {
    console.log(err);
  }
  },
  createCompany: async (req, res) => {
    try {
      
      // const result = await cloudinary.uploader.upload(req.file.path);
      // console.log(req.file.path) 

      await Company.create({
        name: req.body.name,  
        website: req.body.website,
        industry: req.body.industry,
        user: req.user.id,
      });
      console.log(req.body.name)
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
    } catch(err) {
      console.error(err)
    }
  }
};