// This is button component
var $ = require('../common/jQuery')

// Function as exports
module.exports = function(obj) {
  Object.assign(this, $(obj))
}
