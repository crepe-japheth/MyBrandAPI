const express = require('express')
const { getAllPost, createPost, getPost, updatePost, deletePost, checkID } = require('./../controllers/postHandlers')
const router = express.Router()

router.param('id', checkID) // middleware to check if id is valid
router.route('/').get(getAllPost).post(createPost)
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost)



module.exports = router