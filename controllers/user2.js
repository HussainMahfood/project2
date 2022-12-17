// Require User Model
const User = require ('../models/User2');


// Require bcrypt
const bcrypt = require ('bcrypt');
const salt = 10;


// Require Passport Configurations
let passport = require ('../helper/ppConfig2')



// signup
exports.user_signup_post = (req , res) => {
    let user = new User (req.body);

    let hash = bcrypt.hashSync(req.body.password , salt);
    console.log (hash);

    user.password = hash

    // Save user
    user.save()
    .then( () => {
        res.send ('user signin successfully');
        // res.redirect('/user/signin');
    })
    .catch(err => {
        console.log (err);
    })
}



// signin
exports.user_signin_post = passport.authenticate('local' , {
    successRedirect: "/",
    failureRedirect: "/user/signin"
});



// view
exports.user_view_get = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        console.log(err);
    })
}



// update
exports.user_update_post = (req, res) => {
    User.findByIdAndUpdate(req.params.id , req.body)
    .then(() => {
        res.send ('user updated')
    })
    .catch(err => {
        console.log(err)
    });
}



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