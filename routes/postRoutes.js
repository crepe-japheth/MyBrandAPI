const express = require('express')
const { getAllPost, createPost, getPost, updatePost, deletePost, checkID } = require('./../controllers/postHandlers')
const router = express.Router()
const { protect } = require('./../controllers/authController')

//router.param('id', checkID) // middleware to check if id is valid

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         title:
 *           type: string
 *           description: The post title
 *         author:
 *           type: string
 *           description: The post author
 *         description:
 *           type: string
 *           description: The post simple description
 *         urlToImg:
 *           type: string
 *           description: The link to the image
 *         publishedAt:
 *           type: string
 *           description: The auto-generated id of the date
 *         content:
 *           type: string
 *           description: The the body of the post
 *       example:
 *         title: The Beauty of JavaScript
 *         author: japheth
 *         description: This the post about js
 *         publishedAt: 2023-01-01
 *         urlToImg: https://google.com/uyfjhfdfhodfkhdfd.jpg
 *         content: the js have different ....
 * 
 */


/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Returns the list of all the post
 *     tags: [posts]
 *     parameters:
 *       - in: query
 *         name: sort
 *         description: Sort order for blog posts
 *         schema:
 *           type: string
 *           example: '-publishedAt'
 *         required: false
 *       - in: query
 *         name: [author, likes, title]
 *         description: filtering for blog posts
 *         schema:
 *           type: string
 *           example: 'author=japheth'
 *         required: false
 *     responses:
 *       200:
 *         description: The list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */
router.route('/').get(getAllPost).post(createPost)

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get the post by id
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *     responses:
 *       200:
 *         description: The post description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: The post was not found
 */

/**
 * @swagger
 * /api/posts/{id}:
 *  patch:
 *    summary: Update the post by the id
 *    tags: [posts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The post id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      200:
 *        description: The post was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: The post was not  found
 */


/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Remove the post by id
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 * 
 *     responses:
 *       200:
 *         description: The post was deleted
 *       404:
 *         description: The post was not found
 */
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost)



module.exports = router