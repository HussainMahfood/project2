// Require Express
const express = require ('express');

// Initialize Router functionality
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

// Require isLoggedIn
const isLoggedIn = require ('../helper/isLoggedIn');


// Controllers
const quoteCtrl = require("../controllers/quote");


// Routes

// add
router.get("/quote/add", isLoggedIn, quoteCtrl.quote_add_get);
router.post("/quote/add", isLoggedIn, quoteCtrl.quote_add_post);

// list
router.get("/quote/list", isLoggedIn, quoteCtrl.quote_list_get);

// view
router.get("/quote/view", isLoggedIn, quoteCtrl.quote_view_get);

// update
router.get("/quote/edit", isLoggedIn, quoteCtrl.quote_edit_get);
router.post("/quote/update", isLoggedIn, quoteCtrl.quote_update_post);

// delete
router.get("/quote/delete", isLoggedIn, quoteCtrl.quote_delete_get);



// Exports
module.exports = router;