const Post = require('./../models/postModel')
const APIFeatures = require('./../utils/apiFeatures')


exports.getAllPost = async(req, res) => {
    try {
        //creating query object but excluding the limit, sort, page and fields
        const queryObj = {...req.query }
        const excludesFields = ['sort', 'page', 'limit', 'fields']
        excludesFields.forEach(el => delete queryObj[el])

        //creating query object with filter with conditions
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|le|lte)\b/g, match => `$${match}`)

        let query = Post.find(JSON.parse(queryStr))

        //creating query object with sorting 
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            query = query.sort(sortBy)
        } else {
            query = query.sort('-publishedAt')
        }

        //fields limiting and projection
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            query = query.select(fields)
        } else {
            query = query.sort('-__v')
        }

        //creating pagination and limiting

        const page = req.query.page * 1
        const limit = req.query.limit * 1
        const skip = (page - 1) * limit

        query = query.skip(skip).limit(limit)
        if (req.query.page) {
            const numOfPosts = await Post.countDocuments()
            if (skip >= numOfPosts) throw new Error('page does not exxists')
        }
        // const features = APIFeatures(Post.find(), req.query).filter().sort().limitFields().paginate()
        const posts = await query
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
            postId: "post deleted successfully"
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}