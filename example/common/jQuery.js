// This is jQuery
// No dependency
module.exports = function $(obj) {
  return Object.assign({
    jQuery: true
  }, obj)
}
