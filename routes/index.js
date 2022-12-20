const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const indexCntrl = require("../controllers/index");

// Routes
router.get("/", indexCntrl.index_show_get);

module.exports = router;