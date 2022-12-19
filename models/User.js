// Require Mongoose
const mongoose = require ('mongoose');

// Require bcrypt
const bcrypt = require ('bcrypt');


// User Schema
const userSchema = mongoose.Schema ({
    firstName: {
        type: String ,
        required: true,
        minlength: [1 , "First name at least one Character"],
    },
    lastName: {
        type: String ,
        required: true,
        minlength: [1 , "Last name at least one Character"]
    },
    emailAddress: {
        type: String ,
        required: true,
        lowercase: true,
     // unique: true
    },
    phoneNumber: {
        type: String,
      
    },
    photo: {
        // type: Image,
        type: String,
        // required: true
    },
    password: {
        type: String,
        required: true,
        // minlength: [6 , "will not work"] // cannot be set due to bcrypt
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
const User = mongoose.model ('User' , userSchema, 'User');

// Export model to share it with controller
module.exports = User;