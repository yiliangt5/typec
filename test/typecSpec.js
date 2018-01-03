const {isString, isBoolean} = require('../index')
const should = require('chai').should()

describe('isString function', () => {
  it('should return true for a valid string', () => {
    isString('a valid string').should.be.true
  })

  it('should return true for a blank string', () => {
    isString('').should.be.true
  })

  it('should return false for a number', () => {
    isString(1).should.be.false
    isString(Number(1)).should.be.false
  })

  it('should return false for a boolean', () => {
    isString(false).should.be.false
    isString(Boolean(false)).should.be.false
  })

  it('should return false for a nan', () => {
    isString(NaN).should.be.false
  })

  it('should return false for a undefined', () => {
    isString(undefined).should.be.false
  })

  it('should return false for a null', () => {
    isString(null).should.be.false
  })

  it('should return false for an object', () => {
    isString({}).should.be.false
  })

  it('should return false for an custom class called String', () => {
    class String {
      constructor (value) {
        this.value = value
      }
    }
    isString(new String('abc')).should.be.false
  })
})

describe('isBoolean function', () => {
  it('return true for boolean values', () => {
    isBoolean(true).should.be.true
  })

  it('return true for Boolean values', () => {
    isBoolean(Boolean(true)).should.be.true
  })

  it('return false for a custom boolean class values', () => {
    class Boolean {
      constructor (value) {
        this.value = value
      }
    }
    isBoolean(new Boolean(true)).should.be.false
  })
})
