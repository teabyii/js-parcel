// Wrap module to one function, provide params like module, exports, require
module.exports = function makeFunc(module) {
  return `function(module, exports, __parcel_require__) {
/*!
 * module ${module.id}
 * path ${module.path}
 */
${module.content}
}`
}
