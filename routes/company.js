const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const companyController = require("../controllers/company");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, companyController.getCompany);

router.get("/addNewPosition/:id", companyController.addNewPosition);
router.get("/addNewContact/:id", companyController.addNewContact);


router.post("/createCompany", companyController.createCompany);
router.post("/createNewPosition/:id", companyController.createNewPosition);
router.post("/createNewContact/:id", companyController.createNewContact);

router.delete("/deleteCompany/:id", companyController.deleteCompany);
router.delete("/deletePosition/:id", companyController.deletePosition);






// router.post("/deletePost", upload.single("file"), postsController.createPost);

// router.put("/likePost/:id", postsController.likePost);




module.exports = router;