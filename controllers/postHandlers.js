const Post = require('./../models/postModel')

// exports.checkID = (req, res, next, val) => {
//     // const id = req.params.id * 1
//     if (val > 8) {
//         return res.status(404).json({
//             status: "invalid id"
//         })
//     }
//     next()
// }

exports.getAllPost = async(req, res) => {
    try {

        const posts = await Post.find()
        res.status(200).json({
            status: "success",
            results: posts.length,
            data: {
                posts
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}



exports.createPost = async(req, res) => {
    try {

        const newPost = await Post.create(req.body)
        res.status(201).json({
            status: "success",
            data: newPost
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}



exports.getPost = async(req, res) => {
    try {

        const post = await Post.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: post
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}



exports.updatePost = async(req, res) => {
    try {
        const postUpdate = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(201).json({
            status: "updated successfuly",
            data: postUpdate
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}

// put is used to update entire object
//pacth is used to update some properties of object

exports.deletePost = async(req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "success",
            postId: null
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}