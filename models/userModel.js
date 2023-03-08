const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    photo: String,
    password: {
        type: String,
        minlength: 8,
        // required: [true, 'password required']
    },
    password: {
        type: String
            // required: [true, 'password required']
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User