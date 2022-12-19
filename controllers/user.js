// Require User Model
const User = require ('../models/User');

// Require bcrypt
const bcrypt = require ('bcrypt');
const salt = 10;

// Require Passport Configurations
let passport = require ('../helper/ppConfig')

// signup
exports.user_signup_post = (req , res) => {
    let user = new User (req.body);
    console.log(req.body);
    let hash = bcrypt.hashSync(req.body.password , salt);
    user.password = hash
    // Save user
    user.save()
    .then( () => {
        res.send ('user signup successfully');
        // res.redirect('/user/signin');
    })
    .catch(err => {
        console.log (err); // add 404 page error in all so in case of error user aware of it
    })
}

// view
exports.user_view_get = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        console.log(err);
    })
}

// update
exports.user_update_post = (req, res) => {
    User.findByIdAndUpdate(req.params.id , req.body)
    .then(() => {
        res.send('user updated')
    })
    .catch(err => {
        console.log(err)
    });
}

// signin
exports.user_signin_post = passport.authenticate('local' , {
    successRedirect: "/",
    failureRedirect: "/user/signin",
   // failureFlash: true // add flash message
});

// logout
exports.user_logout_get = (req , res) => {

    // Invalidate session
    req.logout ( function (err) {
        if (err) {
            return next (err);
        }
        res.send ('user logout successful');
        // res.redirect ('/user/signin');
    })
}