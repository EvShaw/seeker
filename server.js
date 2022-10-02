const express = require('express')
const app = express()
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const companyRoutes = require("./routes/company");
const contactRoutes = require("./routes/contact");
const meetingRoutes = require("./routes/meeting");

//Use .env file in config folder: 
require('dotenv').config({ path: './config/.env' })


//Passport config
require('./config/passport')(passport)

//DB Connection: 
connectDB()

//Use EJS for views:
app.set('view engine', 'ejs')

//Static Folder: 
app.use(express.static('public'))


//Body Parsing: 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Logging: 
app.use(logger('dev'))

//Use forms for PUTS && DELETES:
app.use(methodOverride('_method'))

//Setup Sessions - stored in DB:
app.use(
    session({
        secret: 'Keyboard Cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
)

//Passport middleware: 
app.use(passport.initialize());
app.use(passport.session());

//Use flash for message errors: 
app.use(flash())

//Routes
app.use("/", mainRoutes);
app.use("/company", companyRoutes);
app.use("/contact", contactRoutes);
app.use("/meeting", meetingRoutes);


//Server online
app.listen(process.env.PORT, () => {
    console.log('Servers Online')
})

