// Wrap all modules to one script, modules as functions to inject
module.exports = function makeScript(entryId, strings) {
  return `(function(modules) {
  var installedModules = {}
  function __parcel_require__(id) {
    if (installedModules[id]) {
      return installedModules[id].exports
    }

    var module = installedModules[id] = {
      exports: {},
      id: id,
      loaded: false
    }

    modules[id].call(module.exports, module, module.exports, __parcel_require__)
    module.loaded = true
    return module.exports
  }

  __parcel_require__.m = modules
  __parcel_require__.c = installedModules

  return __parcel_require__(${entryId})
})({
/*! Modules */
${strings.join(',\n')}
})
`
}
