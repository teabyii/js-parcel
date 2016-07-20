'use strict'

const fs = require('fs')

const readFile = require('./utils/readFile')
const transform = require('./transform')

// Object as the param, key for bundle, value for entry
// { 'bundle.js': './app.js' }
module.exports = function bundle(entries, options) {
  return Promise.all(
    Object.keys(entries).map((bundle) => {
      const entry = entries[bundle]

      return readFile(entry)
        .then((source) => {
          return transform(entry, source, options)
        })
        .then((code) => {
          return new Promise((resolve, reject) => {
            fs.writeFile(bundle, code, (err) => {
              err ? reject(err) : resolve(true)
            })
          })
        })
        .catch((error) => {
          console.error(error)
          throw error
        })
    })
  )
}
