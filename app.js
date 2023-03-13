const express = require('express')
const postRouter = require('./routes/postRoutes')
const userRouter = require('./routes/userRoutes')
const AppError = require('./utils/appError')
const errorHandler = require('./controllers/errorControllers')

const app = express()
app.use(express.json()) // for reading body in post method

app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)

// app.all('*', (req, res, next) => {
//     res.status(404).json({
//         status: "Page Not Found",
//         message: `Cannot Find ${req.originalUrl} On This SERVER`
//     })

//     // next(new AppError(`Cannot Find ${req.originalUrl} On This SERVER`, 404))
// })


// app.use(errorHandler)
module.exports = app