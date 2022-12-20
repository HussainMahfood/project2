const Car = require("../models/Car");
const User = require("../models/User");


// add - GET
exports.car_add_get = (req, res) =>{
    User.find()
    .then ( (users) => {
        res.render ('car/add' , {users} )
    })
    .catch((err) => {
        console.log(err);
    });
}

// add - POST
exports.car_add_post = (req, res) => {
    let car = new Car (req.body)
    car.save()
    .then(()=>{
        // Reference Schema
        // user
        req.body.user.forEach ( user => {
            User.findById (user , (err , user) => {
                user.car.push (car);
                user.save();
            });
        })        
        res.redirect ('/car/list');
        })
    .catch((err) => {
        console.log(err);
    });
}


// list
exports.car_list_get = (req, res) => {
    Car.find()
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
        res.render("car/edit", {car});
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