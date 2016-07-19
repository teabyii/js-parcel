const parcel = require('../')
const fs = require('fs')

const file = './entry.js'
const source = fs.readFileSync(file)

parcel
  .transform(file, source.toString())
  .then((code) => {
    console.log(code)
  })
