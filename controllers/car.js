const Car = require("../models/Car");

exports.car_add_post= (req, res) =>{
    res.send("car add is working");
}

exports.car_delete_get= (req, res) =>{
    res.send("car delete is working");
}

exports.car_list_get= (req, res) =>{
    //res.send("car list is working");
    Car.find()
    .then(car => {
        res.json(car)
    })
    .catch(err => {
        console.log(err);
    })

}

exports.car_view_get= (req, res) =>{
    res.send("car view is working");
}

exports.car_edit_post= (req, res) =>{
    res.send("car edit is working");
}

// delete
exports.car_delete_get = (req, res) => {
    Car.findByIdAndDelete(req.params.id)
    .then(car => {
        res.send("record deleted");
    })
    .catch(err => {
        console.log(err);
    })
};

// view
exports.car_view_get = (req, res) => {
    Car.findById(req.params.id)
    .then(car => {
        res.json(car);
    })
    .catch(err => {
        console.log(err);
    })
}

// add
exports.car_add_post = (req, res) => {
    let car = new Car (req.body)
    quote.save()
    .then(()=>{
        res.send("new data added");
    })
    .catch((err) => {
        console.log(err);
    });
}

// update
exports.car_update_post = (req, res) => {
    Car.findByIdAndUpdate(req.params.id , req.body)
    .then(() => {
        res.send ("data updated")
    })
    .catch(err => {
        console.log(err)
    });
}
