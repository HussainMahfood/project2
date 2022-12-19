const Car = require("../models/Car");
const User = require("../models/User");

// add
exports.car_add_post = (req, res) => {
    let car = new Car (req.body)
    quote.save()
    .then(()=>{
        res.send("new car added");
    })
    .catch((err) => {
        console.log(err);
    });
}

// list
exports.car_list_get= (req, res) =>{
    Car.find().populate("userRef")
    .then(car => {
        res.json(car)
    })
    .catch((err) => {
        console.log(err);

    })
}

// view
exports.car_view_get = (req, res) => {
    Car.findById(req.params.id)
    .then(car => {
        res.send(car);
    })
    .catch(err => {
        console.log(err);
    })
}

// update
exports.car_update_post = (req, res) => {
    Car.findByIdAndUpdate(req.params.id , req.body)
    .then(() => {
        res.send ("car record updated")
    })
    .catch(err => {
        console.log(err)
    });
}

// delete
exports.car_delete_get = (req, res) => {
    Car.findByIdAndDelete(req.params.id)
    .then(car => {
        res.send("car record deleted");
    })
    .catch(err => {
        console.log(err);
    })
};