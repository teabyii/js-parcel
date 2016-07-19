'use strict'

// Find out how many lines form `start` to `end`
function line(str, start, end = str.length - 1) {
  return str.slice(start, end).match(/\n/g).length
}

module.exports = line
