const mongoose = require('mongoose');

// Car Schema
const carSchema = mongoose.Schema({
    plateId: String,
    model: String,
    make: String,
    manufactureYear: Number,
    insuranceDate: Date,          
    value: Number,
    isNew: Boolean
    // quoteSchema: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Quote'
    // }]
},
{ timestamps: true}) // createdAt and updatedAt

// Author Model
const Car = mongoose.model("Car", carSchema , "Car");

// Export model to share it with controller
module.exports = Car;