// Require Mongoose
const mongoose = require ('mongoose');

// Require bcrypt for hashing and salting
const bcrypt = require ('bcrypt');


// User Schema
const userSchema = mongoose.Schema ({
    firstName: {
        type: String ,
        trim: true,
        required: true,
        minlength: [3 , "Please enter a name with 3 or more than 3 characters"],
        maxlength: [15 , "Your entered name exceeds the maximum character limit!!!"]

    },
    lastName: {
        type: String ,
        trim: true,
        required: true,
        minlength: [3 , "Please enter a name with 3 or more than 3 characters"],
        maxlength: [15 , "Your entered name exceeds the maximum character limit!!!"]
    },
    emailAddress: {
        type: String ,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: true,
        minlength: [8 , "Please enter a phone number with atleast 8 digits"],
        maxlength: [15 , "Please enter a phone number with atmost 15 digits"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6 , "Password is too weak!!! Please enter a strong password with more than 6 characters"]
    }
} , {
    timestamps: true   // createdAt and updatedAt
})

// verifyPassword
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password , this.password);
}

// User Model
const User = mongoose.model ('User' , userSchema, 'User');

// Export model to share it with controller
module.exports = User;