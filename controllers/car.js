// Require Model
const Car = require("../models/Car");
const User = require("../models/User");


// Require Moment
const moment = require('moment');


// add - GET
exports.car_add_get = (req, res) =>{
        res.render ('car/add')
}

// add - POST
exports.car_add_post = (req, res) => {
    let car = new Car (req.body)
    car.userRef = req.user._id
    car.save()
    .then(()=>{    
        res.redirect ('/car/list');
        })
    .catch((err) => {
        console.log(err);
    });
}


// list
exports.car_list_get = (req, res) => {
    Car.find({userRef : req.user._id })
    .populate("userRef")
    .then(cars => {
        res.render("car/list", {cars, moment})
    })
    .catch(err => {
        console.log(err);
    })
}


// view
exports.car_view_get = (req, res) => {
    Car.findById(req.query.id)
    .populate("userRef")
    .then(car => {
        res.render("car/view", {car, moment})
    })
    .catch(err => {
        console.log(err);
    })
}


// update - GET
exports.car_edit_get = (req, res) => {
    Car.findById(req.query.id)
    .then(car => {
        res.render("car/edit", {car , moment});
    })
    .catch(err => {
        console.log(err);
    })
}

// update - POST
exports.car_update_post = (req, res) => {
    Car.findByIdAndUpdate(req.body.id , req.body)
    .then(() => {
        res.redirect("/car/list");
    })
    .catch(err => {
        console.log(err)
    });
}


// delete
exports.car_delete_get = (req, res) => {  
    Car.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/car/list");
    })
    .catch(err => {
        console.log(err);
    })
};