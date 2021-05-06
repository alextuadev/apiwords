
const express = require('express')
const cors = require('cors')

const app = express()
const wordApi = require('./src/routes/words')

app.use(cors())

wordApi(app)

module.exports = app
