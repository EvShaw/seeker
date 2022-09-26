const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const companyController = require("../controllers/company");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, companyController.getCompany);

router.post("/createCompany", companyController.createCompany);
// router.post("/deletePost", upload.single("file"), postsController.createPost);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);


module.exports = router;