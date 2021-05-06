const chai = require('chai')
const assert = chai.assert

const stringFunctions = require('../src/stringFunctions')

describe('Test string reverse ', function () {
  it('Success: should return olleh when string is hello', function () {
    const result = stringFunctions.reverseString('hello')
    assert.equal(result, 'olleh')
  })
})
