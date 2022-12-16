// Require Model
const Quote = require("../models/Quote");
const Car = require("../models/Car");
// const User = require("../models/User");

// add
exports.quote_add_post = (req, res) => {
    let quote = new Quote (req.body)
    quote.save()
    .then(()=>{
        res.send("new data added");
    })
    .catch((err) => {
        console.log(err);
    });
}

// list
exports.quote_list_get = (req, res) => {
    Quote.find()
    .then(quote => {
    res.json(quote);
    })
    .catch(err => {
        console.log(err);
    })
}



// view
exports.quote_view_get = (req, res) => {
    Quote.findById(req.params.id)
    .then(quote => {
        res.json(quote);
    })
    .catch(err => {
        console.log(err);
    })
}



// update
exports.quote_update_post = (req, res) => {
    Quote.findByIdAndUpdate(req.params.id , req.body)
    .then(() => {
        res.send ('data updated')
    })
    .catch(err => {
        console.log(err)
    });
}



// delete
exports.quote_delete_get = (req, res) => {  
    Quote.findByIdAndDelete(req.params.id)
    .then(() => {
        res.send("record deleted");
    })
    .catch(err => {
        console.log(err);
    })
};

//test reference
// Quote.find()
// .populate("carRef")
// .then(quote => (console.log(quote)))