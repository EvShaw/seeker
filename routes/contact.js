const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const contactController = require("../controllers/contact");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, companyController.getCompany);

router.post("/createContact/:id", contactController.createContact);
// router.post("/deletePost", upload.single("file"), postsController.createPost);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deleteCompany/:id", companyController.deleteCompany);


module.exports = router;