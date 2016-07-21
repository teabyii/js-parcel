'use strict'

const assert = require('assert')
const path = require('path')

const flatten = require('../../lib/utils/flatten')
const line = require('../../lib/utils/line')

// clean makeId cache
require.cache[path.resolve(__dirname, '../../lib/utils/makeId.js')] = undefined

const makeId = require('../../lib/utils/makeId')
const readFile = require('../../lib/utils/readFile')
const uniq = require('../../lib/utils/uniq')

describe('utils', () => {
  it('#flatten()', () => {
    assert.deepStrictEqual(
      flatten([ [ 1, 2 ], [ 3, 4 ] ]),
      [ 1, 2, 3, 4 ]
    )

    assert.deepStrictEqual(
      flatten([ [ 1, 2, 3 ], 4 ]),
      [ 1, 2, 3, 4 ]
    )
  })

  it('#line()', () => {
    const str =
      `// 1
       // 2
      `

    assert.equal(line(str), 2)
  })

  it('#makeId()', () => {
    const a = './a'
    const b = './b'

    assert.equal(makeId(a), 0)
    assert.equal(makeId(b), 1)
    assert.equal(makeId(a), 0)
  })

  it('#readFile()', (done) => {
    readFile(path.resolve(__dirname, '../../package.json'))
      .then((data) => {
        const pkg = JSON.parse(data)
        assert.equal(pkg.name, 'js-parcel')
        done()
      })
  })

  it('uniq', () => {
    assert.deepStrictEqual(
      uniq([ { id: 1 }, { id: 2 }, { id: 1 } ]),
      [ { id: 1 }, { id: 2 } ]
    )
  })
})
