// Require Model
const Quote = require("../models/Quote");
const Car = require("../models/Car");
const User = require("../models/User");


// Require Moment
const moment = require('moment');


// add - GET
exports.quote_add_get = (req, res) =>{
    Car.find({userRef : req.user._id })
    .then ( (cars ) => {
        res.render ('quote/add' , {cars} )
    })
    .catch((err) => {
        console.log(err);
    });
}

// add - POST
exports.quote_add_post = (req, res) => {
    let quote = new Quote (req.body)

    quote.userRef = req.user._id
    let carSelected = req.body.car[0] 
    quote.carRef = carSelected
    quote.save()
    .then(()=>{  
        res.redirect ('/quote/list');
        })
    .catch((err) => {
        console.log(err);
    });
}


// list
exports.quote_list_get = (req, res) => {
    Quote.find(({userRef : req.user._id }))
    .populate("carRef")
    .populate("userRef")
    .then(quotes => {
        res.render("quote/list", {quotes, moment})
    })
    .catch(err => {
        console.log(err);
    })
}


// view
exports.quote_view_get = (req, res) => {
    Quote.findById(req.query.id)
    .populate("carRef")
    .populate("userRef")
    .then(quote => {
        res.render("quote/view", {quote , moment})
    })
    .catch(err => {
        console.log(err);
    })
}


// update - GET
exports.quote_edit_get = (req, res) => {
    Quote.findById(req.query.id)
    .populate('carRef')
    .populate('userRef')
    .then(quote => {
        res.render("quote/edit", {quote, moment});
    })
    .catch(err => {
        console.log(err);
    })
}

// update - POST
exports.quote_update_post = (req, res) => {
    Quote.findByIdAndUpdate(req.body.id , req.body)
    .then(() => {
        res.redirect("/quote/list");
    })
    .catch(err => {
        console.log(err)
    });
}


// delete
exports.quote_delete_get = (req, res) => {  
    Quote.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/quote/list");
    })
    .catch(err => {
        console.log(err);
    })
};