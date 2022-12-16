// Require Mongoose
const mongoose = require ('mongoose');

// Require bcrypt
const bcrypt = require ('bcrypt');


// User Schema
const userSchema = mongoose.Schema ({
    firstName: {
        type: String ,
        required: true,
        minlength: [2 , "First name must be more than 2 characters"],
        maxlength: [99 , "Too Much!!"]
    },
    lastName: {
        type: String ,
        required: true,
        minlength: [2 , "Last name must be more than 2 characters"],
        maxlength: [99 , "Too Much!!"]
    },
    emailAddress: {
        type: String ,
        required: true,
        lowercase: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        minlength: [8 , "Phone Number must be 8 characters"],
        maxlength: [8 , "Phone Number must be 8 characters"]
    },
    photo: {
        type: Image,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [5 , "Password is too weak, more characters needed"]
    }
} , {
    timestamps: true   // createdAt and updatedAt
})



// verifyPassword
userSchema.methods.verifyPassword = function (password) {
    console.log (password);
    console.log (this.password);
    return bcrypt.compareSync(password , this.password);
}



// User Model
const User = mongoose.model ('User' , userSchema , 'User');


// Export model to share it with controller
module.exports = User;