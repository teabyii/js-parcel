'use strict'

const path = require('path')

const resolveModule = require('./resolveModule')
const joint = require('./joint')
const uniq = require('./utils/uniq')

module.exports = function transform(file, source, options) {
  if (typeof source !== 'string') {
    throw(new TypeError(`Transform source must be a string. Receive ${typeof source}`))
  }

  return resolveModule(file, source)
    .then((modules) => {
      return joint(uniq(modules), options)
    })
    .catch((error) => {
      throw error
    })
}
