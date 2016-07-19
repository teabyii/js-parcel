'use strict'

const create = require('../modules/sourcemap')
const line = require('../utils/line')
const makeScript = require('./script')

// Using modules array to produce sourcemap
function createSourceMap(modules) {
  const generator = create(modules[0].path)
  const template = makeScript(0, [])

  // Where start to put modules
  let last = line(template, 0, template.indexOf('/*! Modules */'))

  // Get code range of each module
  const ranges = modules.map((module) => {
    const start = last + 1
    const end = start + line(module.code, 0)
    last = end

    return {
      file: module.path,
      start, end
    }
  })

  generator.addRanges(ranges)
  return generator.getMap()
}

function makeSourceMap(modules) {
  // Not implement
}

function makeInlineSourceMap(modules) {
  return '//# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
    new Buffer(createSourceMap(modules)).toString('base64')
}

module.exports = { makeInlineSourceMap }
