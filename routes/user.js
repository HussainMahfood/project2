// Require Express
const express = require('express');

// Initialize Router functionality
const router = express.Router();


// Controllers
const userCtrl = require ('../controllers/user');

// Routes
// User register routes
router.get('/auth/register', userCtrl.user_signup_get);
router.post('/auth/register', userCtrl.user_signup_post);

// User sign in routes
router.get('/auth/signin', userCtrl.user_signin_get);
router.post('/auth/signin', userCtrl.user_signin_post);

// User logout route
router.get('/auth/logout', userCtrl.user_logout_get);

// View User Profile route
router.get('/auth/viewProfile', userCtrl.user_viewProfile_get);

// User profile edit and update routes
router.get('/auth/editProfile', userCtrl.user_editProfile_get);
router.put('/auth/updateProfile', userCtrl.user_updateProfile_put)

// User profile delete route
router.get('/auth/deleteProfile', userCtrl.user_deleteProfile_get);



// Exports
module.exports = router;