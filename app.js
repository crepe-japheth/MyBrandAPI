const express = require('express')
const postRouter = require('./routes/postRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()
app.use(express.json()) // for reading body in post method

app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)

module.exports = app