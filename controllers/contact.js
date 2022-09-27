const Contact = require("../models/Contact");


module.exports = {
    createContact: async (req, res) => {
        try {   
          await Contact.create({
            firstName: req.body.firstName,  
            lastName: req.body.lastName,  
            contactWebsite: req.body.contactWebsite,
            contactTitle: req.body.contactTitle,
            user: req.user.id,
          });
          console.log("A new contact has been added!");
          res.redirect("/profile");
        } catch (err) {
          console.log(err);
        }
      },
};