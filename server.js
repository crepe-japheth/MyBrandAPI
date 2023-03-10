const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MyBrand API",
            version: "1.0.0",
            description: "A My brand Express API",
        },
        servers: [{
            url: `http://localhost:3000`,
        }, ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/my-brand-api", swaggerUI.serve, swaggerUI.setup(specs));

dotenv.config({ path: './config.env' })
mongoose.connect(process.env.DATABASE).then(con => console.log('connected'))


app.listen(process.env.PORT, () => {
    console.log('starting server')
})