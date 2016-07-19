// Common library, normal path
var $ = require('./common/jQuery.js')

// Components, no extname
var Button = require('./components/button')
var List = require('./components/list')

// Utils, no filename
var util = require('./utils')

// Module in node_modules
var hello = require('hello-world-classic')

util.ajax() // Output

console.log($({}).jQuery) // True

console.log(new Button().jQuery) // True

console.log(List.create('id').element) // Id

hello() // Hello world
