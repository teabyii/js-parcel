'use strict'

// Flatten dependencies tree to array of modules
// [ [ a, b ], [ c, d ] ... ] -> [ a, b, c, d]
module.exports = function flatten(modules) {
  return modules.reduce((target, item) => {
    if (Array.isArray(item)) {
      target = target.concat(item)
    } else {
      target.push(item)
    }

    return target
  }, [])
}
