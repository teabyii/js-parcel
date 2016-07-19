'use strict'

const makeFunc = require('./in/func')
const makeScript = require('./in/script')
const inline = require('./in/sourcemap')

const line = require('./utils/line')
const flatten = require('./utils/flatten')
const makeInlineSourceMap = require('./in/sourcemap').makeInlineSourceMap

// Put all modules into one script
function wrap(modules, options = {}) {
  const entry = modules[0]

  // Wrap module into `moduleId: function` and put into module.code
  // Module.code have to be used by sourcemap
  modules.forEach((module) => {
    module.code = `${module.id}: ${makeFunc(module)}`
  })

  // Get sourcemap
  const map = options.sourcemap ? makeInlineSourceMap(modules) : ''

  const code = makeScript(modules[0].id, modules.map((module) => {
    return module.code
  }))

  return code + map
}

module.exports = function joint(module, options) {
  return wrap(flatten(module), options)
}
