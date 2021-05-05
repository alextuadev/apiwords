const express = require('express');
const supertest = require('supertest');
const wordApi = require('./src/routes/words')



function testServer() {
  const app = express();
  wordApi(app);
  return supertest(app);
}


module.exports = testServer
