const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const contactController = require("../controllers/contact");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", contactController.getContact);

router.post("/createContact/:id", contactController.createContact);

router.delete("/deleteContact/:id", contactController.deleteContact);


module.exports = router;