// Require Express
const express = require ('express');

// Initialize Router functionality
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

// Require isLoggedIn
const isLoggedIn = require ('../helper/isLoggedIn');



//// Controllers
const quoteCtrl = require("../controllers/quote2");



//// Routes

// add
// router.post("/quote/add", isLoggedIn, quoteCtrl.quote_add_post);
router.post("/quote/add", quoteCtrl.quote_add_post);

// list
router.get("/quote/list", quoteCtrl.quote_list_get);

// view
router.get("/quote/view/:id", quoteCtrl.quote_view_get);

// update
router.post("/quote/update/:id", quoteCtrl.quote_update_post);

// delete
router.get("/quote/delete/:id", quoteCtrl.quote_delete_get);



// Exports
module.exports = router;