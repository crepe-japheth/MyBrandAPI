const User = require('./../models/userModel')
const jwt = require('jsonwebtoken')
    // const { promisify } = require('util')

exports.signup = async(req, res, next) => {
    try {
        const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                passwordConfirm: req.body.passowrdConfirm
            })
            //npm install jsonwebtoken
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE_IN
        })
        res.status(200).json({
            status: "success",
            message: `new user with email ${newUser.email} created successfully`,
            token
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error
        })
    }
}


exports.login = async(req, res, next) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({
                status: "failed",
                error: "please provide both email and password!"
            })
            return next()
        }
        const user = await User.findOne({ email }).select('+password')
            //const correct = await user.correctPassword(password, user.password)

        if (!user || !await user.correctPassword(password, user.password)) {
            res.status(401).json({
                status: "failed",
                error: "invalid email or password!"
            })
            return next()
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE_IN
        })
        res.status(200).json({
            status: "success",
            token
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        })
    }
}


// exports.protect = async(req, res, next) => {
//     try {
//         console.log(req.headers)
//         let token;
//         if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//             token = req.headers.authorization.split(' ')[1]
//         }
//         if (!token) {
//             res.status(401).json({
//                     status: "failed",
//                     message: "you are not logged in."
//                 })
//                 // return next('not logged in')
//         }
//         console.log('TOKEN = ' + token)
//         const decoded = await promisify(jwt.verify)(token, JWT_SECRET)
//         console.log(decoded)
//         next()
//     } catch (err) {

//     }
// }