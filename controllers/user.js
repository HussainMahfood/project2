// Require User Model
const User = require ('../models/User');

// Require bcrypt
const bcrypt = require ('bcrypt');
const salt = 10;

// Require Moment
const moment = require('moment');

// Require Passport Configurations
let passport = require ('../helper/ppConfig');


// GET API for getting and displaying signup/register page
exports.user_signup_get = (req, res) => {
    res.render("user/register");
}

// POST API for signing up/registering new user 
exports.user_signup_post = (req, res) => {

    // Creating a new user from the User Model
    let newUser = new User(req.body);

    // Mixing salt with the password and generating hash based on that hash from hash algorithm
    const hashedPassword = bcrypt.hashSync(req.body.password, parseInt(salt));
    newUser.password = hashedPassword;

    // Saving the new user
    newUserSave = newUser.save()
    .then( () => {
        res.redirect("/user/signin");
    })
    .catch(err => {
        console.log(err);
    }) 
}


// GET API for displaying signin page
exports.user_signin_get = (req, res) => {
    res.render("user/signin");
}
// Sign in POST API after new user is created
exports.user_signin_post = passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/user/signin"
});



// logout
exports.user_logout_get = (req , res) => {
    // Invalidate session
    req.logout ( function (err) {
        if (err) {
            return next (err);
        }
        res.redirect ('/user/signin');
    })
    
}


// GET API for viewing profile information page after clicking on view profile button
exports.user_viewProfile_get = (req, res) => {
    User.findById(req.user)
    .then(user => {
        res.render("user/viewProfile", {user, moment});
    })
    .catch(err => {
        console.log(err);
    })
} 


// GET API for displaying the edit profile page
exports.user_editProfile_get = (req, res) => {
    User.findById(req.user)
    .then(user => {
        user.password = "";
        res.render("user/editProfile", {user, moment});
    })
    .catch(err => {
        console.log(err);
    })
}

// POST API for updating the user profile after editing 
exports.user_updateProfile_post = (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, parseInt(salt));
    req.body.password = hashedPassword
    User.findByIdAndUpdate(req.user, req.body)
    .then(() => {
        res.redirect("/");
    })
    .catch(err => {
        console.log(err)
    });
}