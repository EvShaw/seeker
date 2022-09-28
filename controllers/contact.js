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
          res.redirect("/company/"+req.params.id);
        } catch (err) {
          console.log(err);
        }
      },
};