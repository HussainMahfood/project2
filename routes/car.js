const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const carCntrl = require("../controllers/car");

// Routes
router.post("/car/add", carCntrl.car_add_post);

router.get("/car/delete/:id", carCntrl.car_delete_get);
router.get("/car/list", carCntrl.car_list_get);

router.get("/car/view", carCntrl.car_view_get);
router.post("/car/update", carCntrl.car_update_post);


module.exports = router;