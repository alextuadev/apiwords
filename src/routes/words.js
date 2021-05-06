const express = require('express')
const { reverseString } = require('../stringFunctions')

function wordApi (app) {
  const router = express.Router()
  app.use('/', router)

  router.get('/iecho', async function (req, res, next) {
    const { text } = req.query

    if (text === undefined || text === null || !text) {
      res.status(400).json({
        error: 'no text'
      })
    } else {
      try {
        const reverText = reverseString(text)
        res.status(200).json({
          text: reverText
        })
      } catch (err) {
        next(err)
      }
    }
  })
}

module.exports = wordApi
