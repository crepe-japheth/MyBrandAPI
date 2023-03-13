const User = require('./../models/userModel')

// users fu
exports.getAllUsers = async(req, res) => {
    try {
        const users = await User.find()
        res.status(500).json({
            status: "success",
            data: {
                users
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error
        })
    }
}

exports.getUser = (req, res) => {
    res.status(500).json({
        status: "error",
        postId: "user not defined"
    })
}

exports.createUser = (req, res) => {
    res.status(500).json({
        status: "error",
        postId: "user not defined"
    })
}

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: "error",
        postId: "user not defined"
    })
}

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: "error",
        postId: "user not defined"
    })
}