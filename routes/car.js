// Require Express
const express = require ('express');

// Initialize Router functionality
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

// Require isLoggedIn
const isLoggedIn = require ('../helper/isLoggedIn');


// Controller
const carCtrl = require("../controllers/car");


// Routes

// add
router.get("/car/add", isLoggedIn, carCtrl.car_add_get);
router.post("/car/add", isLoggedIn, carCtrl.car_add_post);

// list
router.get("/car/list", isLoggedIn, carCtrl.car_list_get);

// view
router.get("/car/view", isLoggedIn, carCtrl.car_view_get);

// update
router.get("/car/edit", isLoggedIn, carCtrl.car_edit_get);
router.post("/car/update", isLoggedIn, carCtrl.car_update_post);

// delete
router.get("/car/delete", isLoggedIn, carCtrl.car_delete_get);


module.exports = router;