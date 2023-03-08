const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')


dotenv.config({ path: './config.env' })
mongoose.connect(process.env.DATABASE).then(con => console.log('connected'))


app.listen(process.env.PORT, () => {
    console.log('starting server')
})