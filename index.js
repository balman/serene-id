const { customAlphabet } = require('nanoid')
const uniqueRandomArray = require('unique-random-array')
const nouns = require('./nouns.json')
const adjectives = require('./adjectives.json')

const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const ID_LEN = 12

/**
 * Generate a serene ID.
 *
 * @param {object} [opts={}] Configuration options
 * @returns
 */
function sereneId (opts = {}) {
  let identifierLength = ID_LEN
  if (opts.identifierLength && !opts.generator) {
    if (!Number.isInteger(opts.identifierLength)) {
      throw new Error('A non-integer was specified for the identifier length. Please specify a positive whole number.')
    } else {
      identifierLength = opts.identifierLength
    }
  }

  const _opts = Object.assign({
    generator: customAlphabet(ALPHABET, identifierLength),
    separator: '-',
    skipIdentifier: false
  }, opts)
  const noun = uniqueRandomArray(nouns)()
  const adjective = uniqueRandomArray(adjectives)()
  const { separator, skipIdentifier, generator } = _opts

  if (skipIdentifier === true) {
    return noun + separator + adjective
  }

  if (typeof generator !== 'function') {
    throw new Error('The generator specified is not a valid function. A valid string or number producing function must be specified.')
  }

  const identifier = generator()

  return adjective + separator + noun + separator + identifier
}

module.exports = sereneId
module.exports.adjectives = adjectives
module.exports.nouns = nouns
