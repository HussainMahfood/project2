// Require Express
const express = require('express');

// Initialize Router functionality
const router = express.Router();


// Controllers
const userCtrl = require ('../controllers/user2');

// Routes
router.post ('/user/signup' , userCtrl.user_signup_post);

router.post ('/user/signin' , userCtrl.user_signin_post);

router.get ('/user/view/:id' , userCtrl.user_view_get);

router.post ('/user/update/:id' , userCtrl.user_update_post);

router.get ('/user/logout' , userCtrl.user_logout_get);



// Exports
module.exports = router;