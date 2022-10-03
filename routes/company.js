const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const companyController = require("../controllers/company");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, companyController.getCompany);


router.get("/addNewPosition/:id", companyController.addNewPosition);
router.get("/addNewContact/:id", companyController.addNewContact);



router.post("/createNewCompany", companyController.createNewCompany);
router.post("/createNewPosition/:id", companyController.createNewPosition);
router.post("/createNewContact/:id", companyController.createNewContact);

router.delete("/deleteCompany/:id", companyController.deleteCompany);
router.delete("/deletePosition/:id", companyController.deletePosition);
router.delete("/deleteContact/:id", companyController.deleteContact);


module.exports = router;