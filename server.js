
const express = require('express');

const app = express();
const wordApi = require('./src/routes/words')

wordApi(app);

module.exports = app
