const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    author: {
        type: String,
        default: "Japheth M."
    },
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    urlToImg: {
        type: String,
        default: "none"
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    content: {
        Type: String
    },
    likes: {
        type: Number,
        default: 0
    }

})

const Post = mongoose.model('Post', postSchema)

module.exports = Post