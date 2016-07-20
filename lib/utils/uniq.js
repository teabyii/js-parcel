'use strict'

// Remove reduplicate module in array
module.exports = function uniq(modules) {
  const map = {}

  modules.forEach((module) => {
    if (map[module.id] === undefined) {
      map[module.id] = module
    }
  })

  return Object.keys(map).map((key) => map[key])
}
