'use strict'

const path = require('path')

const resolveModule = require('./resolveModule')
const makeId = require('./utils/makeId')
const joint = require('./joint')

module.exports = function transform(file, source, options) {
  if (typeof source !== 'string') {
    throw(new TypeError(`Transform source must be a string. Receive ${typeof source}`))
  }

  return resolveModule(makeId(), file, source)
    .then((module) => {
      return joint(module, options)
    })
    .catch((error) => {
      throw error
    })
}
