'use strict'

// Reference: https://github.com/thlorenz/generate-sourcemap/blob/master/index.js
const SourceMapGenerator = require('source-map').SourceMapGenerator

function addMappings(generator, file, start, end) {
  for (let line = start + 1; line <= end; line++) {
    var origin = line - start

    try {
      generator.addMapping({
        source: file,
        original: { line: origin, column: 0 },
        generated: { line: line, column: 0 }
      })
    } catch(e) {
      console.error('when mapping sourceFile: %s, origLine: %d line: %d', file, origin, line)
      throw(e)
    }
  }
}

module.exports = function createGenerator(file, root = '') {
  const generator = new SourceMapGenerator({ file: file, sourceRoot: root })

  function addRanges(ranges) {
    if (!Array.isArray(ranges)) {
      ranges = [ ranges ]
    }

    ranges.forEach((range) => {
      addMappings(generator, range.file, range.start, range.end)
    })
  }

  return {
    addRanges,
    getMap: function () { return generator.toString() }
  };
};
