const Company = require("../models/Company");
const Contact = require("../models/Contact");
const User = require("../models/User");
const Meeting = require("../models/Meeting");


module.exports = {
    createMeeting: async (req, res) => {
        try {
            //   const contactUser = await User.findById(req.user.id)

            await Meeting.create({
                meetingDate: req.body.meetingDate,
                meetingTime: req.body.meetingTime,
                meetingType: req.body.meetingType,
                contact: req.params.id,
                user: req.user.id,
            });
            console.log("A new contact has been added!");
            res.redirect("/contact/" + req.params.id);
        } catch (err) {
            console.log(err);
        }

    },
}