// Require Express
const express = require('express');

// Initialize Router functionality
const router = express.Router();

// Require for post requests
router.use(express.urlencoded({ extended: true }));

// Require isLoggedIn
const isLoggedIn = require ('../helper/isLoggedIn');


// Controllers
const userCtrl = require ('../controllers/user');

// Routes
// User register routes
router.get('/user/register', userCtrl.user_signup_get);
router.post('/user/register', userCtrl.user_signup_post);

// User sign in routes
router.get('/user/signin', userCtrl.user_signin_get);
router.post('/user/signin', userCtrl.user_signin_post);

// User logout route
router.get('/user/logout', userCtrl.user_logout_get);

// View User Profile route
router.get('/user/viewProfile', isLoggedIn, userCtrl.user_viewProfile_get);


// User profile edit and update routes
router.get('/user/editProfile', isLoggedIn, userCtrl.user_editProfile_get);
router.post('/user/updateProfile', isLoggedIn, userCtrl.user_updateProfile_post)


// Exports
module.exports = router;