'use strict'

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const resolveModule = require('../../lib/resolveModule')

describe('resolve module', () => {
  it('simple', (done) => {
    const file = path.resolve(__dirname, '../files/simple/a.js')
    const source = fs.readFileSync(file, 'utf8')

    resolveModule(file, source)
      .then((modules) => {
        assert.equal(modules.length, 3)

        assert.equal(modules[0].path, file)
        assert.equal(modules[1].path, path.resolve(__dirname, '../files/simple/b.js'))
        done()
      })
  })

  
})
