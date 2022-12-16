// Require Express
const express = require('express');

// Initialize Router functionality
const router = express.Router();


// Controllers
const userCtrl = require ('../controllers/user');

// Routes
router.post ('/user/signup' , userCtrl.user_signup_post);

router.post ('/user/signin' , userCtrl.user_signin_post);

router.get ('/user/view/:id' , userCtrl.user_logout_get);

router.get ('/user/update/:id' , userCtrl.user_logout_get);

router.get ('/user/logout' , userCtrl.user_logout_get);



// Exports
module.exports = router;