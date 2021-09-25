/* eslint-env mocha */

const assert = require('assert')
const { v4: uuidv4 } = require('uuid')
const sereneId = require('.')
const nouns = require('./nouns.json')
const adjectives = require('./adjectives.json')

describe('sereneId', function () {
  it('should return a well-formed serene id by default', function () {
    const defaultId = sereneId()
    assert.ok(defaultId.match(/[a-z]+-[a-z]+-[A-Za-z0-9]{12}$/))
  })

  it('should return a serene id using uuid if passed as generator', function () {
    const uuidId = sereneId({ generator: uuidv4 })
    assert.ok(uuidId.match(/[a-z]+-[a-z]+-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/))
  })

  it('should return a serene id using underscores if passed as separator', function () {
    const sepId = sereneId({ separator: '_' })
    assert.ok(sepId.match(/[a-z]+_[a-z]+_[A-Za-z0-9]{12}$/))
  })

  it('should return a serene id with a 5 character identifier if passed as identifierLength', function () {
    const limitedId = sereneId({ identifierLength: 5 })
    assert.ok(limitedId.match(/[a-z]+-[a-z]+-[A-Za-z0-9]{5}$/))
  })

  it('should omit unique identifier if skipIdentifier passed', function () {
    const noUniqueId = sereneId({ skipIdentifier: true })
    assert.ok(noUniqueId.match(/[a-z]+[a-z]+$/))
  })

  it('should throw an error if generator is not a function', function () {
    assert.throws(() => sereneId({ generator: 'hi' }), Error)
  })

  it('should throw an error if identifierLength is not an integer', function () {
    assert.throws(() => sereneId({ identifierLength: 'hi' }), Error)
  })
})

describe('sereneId.adjectives', function () {
  it('should return an array of all adjectives', function () {
    assert.ok(typeof sereneId.adjectives, 'array')
    assert.equal(sereneId.adjectives.length, adjectives.length)
  })
})

describe('sereneId.nouns', function () {
  it('should return an array of all nouns', function () {
    assert.ok(typeof sereneId.nouns, 'array')
    assert.equal(sereneId.nouns.length, nouns.length)
  })
})
