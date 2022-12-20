// Require User Model
const User = require ('../models/User');

// Require bcrypt
const bcrypt = require ('bcrypt');
// const salt = 10;

// Require Moment
const moment = require('moment');

// Require Passport Configurations
let passport = require ('../helper/ppConfig');
// const { exists } = require('../models/User');


// GET API for getting and displaying signup/register page
exports.user_signup_get = (req, res) => {
    res.render("user/register");
}

// POST API for signing up/registering new user 
exports.user_signup_post = (req, res) => {

    // Using try and catch method for checking errors and then catching them
    try {
        // declaring registration parameter variables
        const {firstName, lastName, emailAddress, phoneNumber, password} = req.body;

        // If any field is left empty
        if(!firstName || !lastName || !emailAddress || !phoneNumber || !password ) {
            return res.json({ msg: "Please fill in the empty fields" });
        }

        // For ensuring that password is atleast 6 characters
        if(password.length < 6) {
            return res.json({ msg: "Please enter a password with atleast 6 characters"});
        }

        // Checking if the email already exits or not in the MongoDB database
        const emailExists = User.findOne({emailAddress: emailAddress});
        if(emailExists) {
            res.json({ msg: "Email already taken. Please try a new email"});
        }


        // Creating a new user from the User Model
        let newUser = new User(req.body);

        // Hashing and salting the password using bcrypt module
        // Generating salt
        const salt = bcrypt.genSalt(10);
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
    catch(error) {
        console.log(error);
    }   
    
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
    // try {
    //     const {emailAddress, password} = req.body;

    //     // // Checking if all the fields are filled
    //     // if(!emailAddress || !password) {
    //     //     return res.json({msg: "Please fill in the empty fields"});
    //     // }

    //     // Checking if the email entered is valid and present in the database
    //     const emailValid = User.findOne({emailAddress: emailAddress});
    //     if(!emailValid) {
    //         res.json({msg: "Invalid Email"});
    //     }

    //     // Checking if the password is valid by comparing it with the hashed password in database
    //     const passwordMatch = bcrypt.compare(password, newUser.password);
    //     if(!passwordMatch) {
    //         return res.json({msg: "Invalid Password"});
    //     }
    // }
    // catch (error) {
    //     res.json({err: error});
    // }
    // passport.authenticate('local', {
    //     successRedirect: "/",
    //     failureRedirect: "/user/signin"
    // });


// logout
exports.user_logout_get = (req , res) => {
// console.log("test")
    // Invalidate session
    req.logout ( function (err) {
        if (err) {
            return next (err);
        }
        // res.send ('user logout successful');
        res.redirect ('/user/signin');
    })
    
}

// GET API for viewing profile information page after clicking on view profile button
exports.user_viewProfile_get = (req, res) => {
    // console.log(req.user);
    try {
        // console.log(req.user);
        User.findById(req.user).then(user => {
            //res.json(user);
            res.render("user/viewProfile", {user, moment});
        })
        .catch(err => {
            console.log(err);
        })
    }
    catch(error) {
        res.json(error);
    }
} 

// GET API for displaying the edit profile page
exports.user_editProfile_get = (req, res) => {
    try {
        User.findById(req.user).then(user => {
            res.render("user/editProfile", {user, moment});
        })
        .catch(err => {
            console.log(err);
        })
    }
    catch(error) {
        res.json(error);
    }
}

// POST API for updating the user profile after editing 
exports.user_updateProfile_post = (req, res) => {
    try {
        console.log(req.user);
        console.log("test");
        console.log(req.body);
        User.findByIdAndUpdate(req.user, req.body).then(() => {
            // res.send ('user updated');
            res.redirect("/");
        })
        .catch(err => {
            console.log(err)
        });
    }
    catch(error) {
        res.json(error);
    }
}

// DELETE API for deleting user's profile
exports.user_deleteProfile_get = (req, res) => {
    try {
        console.log(req.query.id);
        User.findByIdAndDelete(req.query.id).then(() => {
            res.redirect("/user/register");
        })
        .catch(err => {
            console.log(err)
        })
    }
    catch(error) {
        res.json(error)
    }
}





