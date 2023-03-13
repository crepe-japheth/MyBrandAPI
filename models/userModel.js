const mongoose = require('mongoose')
    //install bcyrptjs
const bcrypt = require('bcryptjs')

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
        select: false
            // required: [true, 'password required']
    },
    passwordConfirm: {
        type: String,
        // this works only on CREATE and SAVE
        validate: {
            validator: function(el) {
                return el === this.password
            },
            message: 'password should be the same'
        }
    }
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined
    next()
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    try {
        return bcrypt.compare(candidatePassword, userPassword)
    } catch (err) {
        console.log(err)
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User