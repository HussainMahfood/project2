// Require Mongoose
const mongoose = require ('mongoose');


// Quote Schema
const quoteSchema = mongoose.Schema ({
    quoteId: String,
    quoteValue: Number,
    quoteDate: Date,
    insuranceType: String

    // car: [{
    //     type: mongoose.Schema.Types.ObjectId ,
    //     ref: 'plateId'
    // }]
}, 
{ timestamps: true })  // createdAt and updatedAt



// Quote Model
const Quote = mongoose.model ('Quote' , quoteSchema , 'Quote');


// Export model to share it with controller
module.exports = Quote;