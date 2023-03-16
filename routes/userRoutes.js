const express = require('express')
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('./../controllers/userHandlers')
const { signup, login } = require('./../controllers/authController')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         passwordConfirm:
 *           type: string
 *           description: The password confirmation
 *       example:
 *         name: mutabaruka
 *         email: japhethmutabaruka@gmail.com
 *         password: 0987654321
 *         passwordConfirm: 0987654321
 * 
 */

/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: Create a new post
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The signup was successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Some server error
 */

router.post('/signup', signup)


/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Create a new post
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Some server error
 */
router.post('/login', login)

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)


module.exports = router