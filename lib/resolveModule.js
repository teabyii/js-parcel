'use strict'

const path = require('path')
const parse = require('require-call')
const resolve = require('resolve')

const readFile = require('./utils/readFile')
const makeId = require('./utils/makeId')

// Parse module code to get all modules
// { id: <number>, path: <string>, content: <string>, dependencies: [] }
module.exports = function resolveModule(id, file, source) {
  // Module info
  const module = {
    id: id,
    path: file,
    content: null,
    dependencies: null
  }

  const result = parse(source, (item) => {
    // Replace module by module id
    let id = item.id = makeId()
    return `__parcel_require__(${id})`
  })

  module.content = result.code
  const basedir = path.dirname(file)

  return Promise.all(
    // Map dependencies as promise for .all
    result.resource.map((item) => new Promise((ok, fail) => {
      // Resolve dependencies path
      resolve(item.path, { basedir }, (error, res) => {
        if (error) {
          fail(error)
        } else {
          readFile(res)
            .then((source) => {
              return resolveModule(item.id, res, source)
            })
            .then((module) => {
              ok(module)
            })
            .catch((error) => {
              fail(error)
            })
        }
      })
    }))
  ).then((dependencies) => {
    module.dependencies = dependencies
    return module
  }).catch((error) => {
    throw error
  })
}
