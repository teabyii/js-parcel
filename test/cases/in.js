'use strict'

const assert = require('assert')
const path = require('path')
const fs = require('fs')
const resolveModule = require('../../lib/resolveModule')
const makeFunc = require('../../lib/in/func')
const makeScript = require('../../lib/in/script')
const sourcemap = require('../../lib/in/sourcemap')

const {
  makeInlineSourceMap
} = sourcemap

describe('in', () => {
  it('#makFunc()', () => {
    const str = makeFunc({
      id: 0,
      path: './a.js',
      content: 'console.log("hello world")'
    })

    assert.notEqual(str.indexOf('function(module, exports, __parcel_require__)'), -1)
    assert.notEqual(str.indexOf('console.log("hello world")'), -1)
  })

  it('#makeScript()', () => {
    const arr = [
      '1: function() { // 1 }',
      '2: function() { // 2 }'
    ]
    const str = makeScript(0, arr)

    const inject = fs.readFileSync(path.resolve(__dirname, '../files/others/wrap.js'))

    assert.notEqual(str.indexOf(inject), -1)
    assert.notEqual(str.indexOf(`{\n/*! Modules */\n${arr.join(',\n')}\n}`), -1)
  })

  const str = fs.readFileSync(path.resolve(__dirname, '../files/others/simple-bundle.js'))

  it('#makeInlineSourceMap()', () => {
    assert.notEqual(str.indexOf('sourceMappingURL=data:application/json;charset=utf-8;base64,'), -1)
  })
})
