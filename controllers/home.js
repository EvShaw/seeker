module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    newCompany: (req, res) => {
      res.render("newCompany.ejs")
    }
  };