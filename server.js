// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Require and initialze dotenv
require('dotenv').config();


// Initailze Express
const app = express();

// Look for all the static files in public folder (css, JS, Images, Audio, Videos).
app.use(express.static("public"));

// Require Express-EJS-Layouts
const expressLayouts = require("express-ejs-layouts");

// Look in to views folder for a file named layout.ejs
app.use(expressLayouts);

// Express Session and Passport
let session = require('express-session');
let passport = require('./helper/ppConfig');

// Session
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 36000000000} // 10 hour
}));

app.use(passport.initialize());
app.use(passport.session());

// Sharing the information with all web pages.
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

// Import Routes
const indexRoute = require('./routes/index'); //Frontend
const userRoute = require('./routes/user');
const carRoute = require('./routes/car');
const quoteRoute = require('./routes/quote');

// Mount Routes
app.use('/', indexRoute);
app.use('/', userRoute);
app.use('/', carRoute);
app.use('/', quoteRoute);

// Node.js to look in a folder views for all the ejs files.
app.set("view engine", "ejs");

mongoose.set('strictQuery', false);
// MongoDB Connection Configuration
mongoose.connect(process.env.mongoDBURL, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("MongoDB Configured Successfully")
    }
)

// PORT Configuration
const port = process.env.PORT;

// Listen to specific port for incomming requests
app.listen(port, () => {
    console.log(`Tameen WebApp is running on ${port}`);
})
