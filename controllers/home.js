module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    newCompany: (req, res) => {
      res.render("newCompany.ejs")
    },
    newContact: (req, res) => {
      res.render("newContact.ejs")
    }
  };