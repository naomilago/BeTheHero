const crypto = require('crypto')

module.exports = function generateUniqueid() {
  return crypto.randomBytes(4).toString('HEX')
}