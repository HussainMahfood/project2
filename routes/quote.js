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
// router.get("/quote/add", isLoggedIn, quoteCtrl.quote_add_get);
router.get("/quote/add", quoteCtrl.quote_add_get);
router.post("/quote/add", quoteCtrl.quote_add_post);

// list
router.get("/quote/list", quoteCtrl.quote_list_get);

// view
router.get("/quote/view", quoteCtrl.quote_view_get);

// update
router.get("/quote/edit", quoteCtrl.quote_edit_get);
router.post("/quote/update", quoteCtrl.quote_update_post);

// delete
router.get("/quote/delete", quoteCtrl.quote_delete_get);



// Exports
module.exports = router;