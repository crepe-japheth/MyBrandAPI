exports.checkID = (req, res, next, val) => {
    // const id = req.params.id * 1
    if (val > 8) {
        return res.status(404).json({
            status: "invalid id"
        })
    }
    next()
}

exports.getAllPost = (req, res) => {
    res.status(200).json({
        status: "success",
        results: 4,
        data: {
            posts: "all posts"
        }
    })
}



exports.createPost = (req, res) => {
    console.log(req.body)
    res.status(201).json({
        status: "success",
        data: req.body
    })
}



exports.getPost = (req, res) => {
    res.status(200).json({
        status: "success",
        postId: req.params.id
    })
}



exports.updatePost = (req, res) => {
    res.status(201).json({
        status: "updated success",
        postId: req.params.id
    })
}

// put is used to update entire object
//pacth is used to update some properties of object

exports.deletePost = (req, res) => {
    res.status(204).json({
        status: "success",
        postId: null
    })
}