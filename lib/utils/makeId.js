'use strict'

// Make id number for module
let id = 0

// uniq
const map = {}

module.exports = function makeId(path) {
  return map[path] === undefined ? (map[path] = id++) : map[path]
}
