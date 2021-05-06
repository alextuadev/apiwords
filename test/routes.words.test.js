const request = require('supertest')
const app = require('../server')
const chai = require('chai')
const assert = chai.assert

describe('GET /iecho', function () {
  it('response status 400 and json structure given', function (done) {
    request(app)
      .get('/iecho')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then(response => {
        assert(response.body, {
          error: 'no text',
          palindrome: false
        })
        done()
      })
      .catch(err => done(err))
  })

  it('response status 200 and json structure given', function (done) {
    request(app)
      .get('/iecho?text=hello')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert(response.body, {
          error: 'olleh',
          palindrome: false
        })
        done()
      })
      .catch(err => done(err))
  })


  it('response status 200 and json structure given, palindrome true', function (done) {
    request(app)
      .get('/iecho?text=racecar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert(response.body, {
          error: 'racecar',
          palindrome: true
        })
        done()
      })
      .catch(err => done(err))
  })
})
