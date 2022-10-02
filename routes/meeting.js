const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const meetingController = require("../controllers/meeting");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", meetingController.getMeeting);

router.post("/createMeeting/:id", meetingController.createMeeting);

// router.delete("/deleteMeeting/:id", meetingController.deleteMeeting);


module.exports = router;