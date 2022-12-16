// require mongoose
const mongoose = require('mongoose');

// Car Schema
const carSchema = mongoose.Schema({
    plateId: String,
    model: String,
    make: String,
    manufactureYear: Number,
    insuranceDate: Date,          
    value: Number,
    isNewCar: Boolean,
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{ timestamps: true}) // createdAt and updatedAt

// Car Model
const Car = mongoose.model("Car", carSchema, "Car");

// Export model to share it with controller
module.exports = Car;