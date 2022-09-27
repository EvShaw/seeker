const cloudinary = require("../middleware/cloudinary");
const Company = require("../models/Company");


module.exports = {
  getProfile: async (req, res) => {
    try {
      const companies = await Company.find({ user: req.user.id });
      res.render("profile.ejs", { companies: companies, user: req.user });
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

};
