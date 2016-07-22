'use strict'

const path = require('path')
const parse = require('require-call')
const resolve = require('resolve')

const readFile = require('./utils/readFile')
const makeId = require('./utils/makeId')
const flatten = require('./utils/flatten')

// Parse module code to get all modules
// [ { id: <number>, path: <string>, content: <string> } ... ]
module.exports = function resolveModule(file, source) {
  // Module info
  const module = {
    id: makeId(file),
    path: file,
    content: null
  }

  const basedir = path.dirname(file)

  let result
  try {
    result = parse(source, (item) => {
      const res = item.path = resolve.sync(item.path, { basedir })
      let id = item.id = makeId(res)
      return `__parcel_require__(${id})`
    })
  } catch (error) {
    return Promise.reject(error)
  }

  module.content = result.code

  return Promise.all(
    // Map dependencies as promise for .all
    result.resource.map((item) => new Promise((ok, fail) => {
      readFile(item.path)
        .then((source) => {
          return resolveModule(item.path, source)
        })
        .then((modules) => {
          ok(modules)
        })
        .catch((error) => {
          fail(error)
        })
    }))
  ).then((modules) => {
    return [ module ].concat(flatten(modules))
  }).catch((error) => {
    throw error
  })
}
