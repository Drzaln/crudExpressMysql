const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require ('body-parser')
const routes = require('./routes')

app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(bodyParser.json())

routes(app)

app.listen(port)
console.log('mulai')