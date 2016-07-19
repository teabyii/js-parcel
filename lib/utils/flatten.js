'use strict'

// Flatten dependencies tree to array of modules
// { id: <number>, path: <string>, content: <string>, dependencies: [] }
// ->
// [ { id: <number>, path: <string>, content: <string> } ... ]
module.exports = function flatten(module) {
  let modules = [ module ]

  module.dependencies.forEach((dependency) => {
    modules = modules.concat(flatten(dependency))
  })
  delete module.dependencies

  return modules
}
