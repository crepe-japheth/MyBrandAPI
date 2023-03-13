module.exports = (err, req, res, next) => {
    err.statusCode = 400
    err.status = err.status || 'error'

    res.status(statusCode).json({
        status: err.status,
        message: err.message
    })
}