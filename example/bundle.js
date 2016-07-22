(function(modules) {
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

  return __parcel_require__(0)
})({
/*! Modules */
0: function(module, exports, __parcel_require__) {
/*!
 * module 0
 * path ./entry.js
 */
// Common library, normal path
var $ = __parcel_require__(1)

// Components, no extname
var Button = __parcel_require__(2)
var List = __parcel_require__(3)

// Utils, no filename
var util = __parcel_require__(4)

// Module in node_modules
var hello = __parcel_require__(5)

util.ajax() // Output

console.log($({}).jQuery) // True

console.log(new Button().jQuery) // True

console.log(List.create('id').element) // Id

hello() // Hello world

},
1: function(module, exports, __parcel_require__) {
/*!
 * module 1
 * path /Users/boom/Github/js-parcel/example/common/jQuery.js
 */
// This is jQuery
// No dependency
module.exports = function $(obj) {
  return Object.assign({
    jQuery: true
  }, obj)
}

},
2: function(module, exports, __parcel_require__) {
/*!
 * module 2
 * path /Users/boom/Github/js-parcel/example/components/button.js
 */
// This is button component
var $ = __parcel_require__(1)

// Function as exports
module.exports = function(obj) {
  Object.assign(this, $(obj))
}

},
3: function(module, exports, __parcel_require__) {
/*!
 * module 3
 * path /Users/boom/Github/js-parcel/example/components/list.js
 */
// This is list component
// Object as exports
module.exports = {
  create: function(element) {
    return { element: element }
  },
  element: null
}

},
4: function(module, exports, __parcel_require__) {
/*!
 * module 4
 * path /Users/boom/Github/js-parcel/example/utils/index.js
 */
// This is util
// Using exports, not module
exports.ajax = __parcel_require__(6)

},
5: function(module, exports, __parcel_require__) {
/*!
 * module 5
 * path /Users/boom/Github/js-parcel/example/node_modules/hello-world-classic/index.js
 */
module.exports = function() {
  console.log('hello, world')
}
},
6: function(module, exports, __parcel_require__) {
/*!
 * module 6
 * path /Users/boom/Github/js-parcel/example/utils/ajax.js
 */
module.exports = function ajax() {
  console.log('Call ajax')
}

}
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZW50cnkuanMiLCIvVXNlcnMvYm9vbS9HaXRodWIvanMtcGFyY2VsL2V4YW1wbGUvY29tbW9uL2pRdWVyeS5qcyIsIi9Vc2Vycy9ib29tL0dpdGh1Yi9qcy1wYXJjZWwvZXhhbXBsZS9jb21wb25lbnRzL2J1dHRvbi5qcyIsIi9Vc2Vycy9ib29tL0dpdGh1Yi9qcy1wYXJjZWwvZXhhbXBsZS9jb21wb25lbnRzL2xpc3QuanMiLCIvVXNlcnMvYm9vbS9HaXRodWIvanMtcGFyY2VsL2V4YW1wbGUvdXRpbHMvaW5kZXguanMiLCIvVXNlcnMvYm9vbS9HaXRodWIvanMtcGFyY2VsL2V4YW1wbGUvbm9kZV9tb2R1bGVzL2hlbGxvLXdvcmxkLWNsYXNzaWMvaW5kZXguanMiLCIvVXNlcnMvYm9vbS9HaXRodWIvanMtcGFyY2VsL2V4YW1wbGUvdXRpbHMvYWpheC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9lbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIifQ==