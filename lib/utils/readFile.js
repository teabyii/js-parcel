'use strict'

const fs = require('fs')

// Read file async, return the promise.
module.exports = function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      err ? reject(err) : resolve(data.toString())
    })
  })
}
