const parcel = require('../')

parcel.bundle({
  'bundle.js': './entry.js'
}, { sourcemap: true })
