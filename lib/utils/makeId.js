'use strict'

// Make id number for module
let id = 0

module.exports = function makeId() {
  return id++
}
