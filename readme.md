# js-parcel

One simple JavaScript require() module bundler, just take care JavaScript, no others.



## Installation

```shell
npm install js-parcel
```

## Usage

### API

You can use **js-pancel** as a converter to take care content of js files.

```js
const parcel = require('js-parcel')

parcel
  .transform(file, source, { sourcemap: true })
  // require file to resolve path, but using source to transform
  .then((content) => { ... })
```

Or as a bundler

```js
const parcel = require('js-parcel')

parcel.bundle({
  'bundle.js': './app.js'
})
```

> Only support inline-source-map now.

### Example

```shell
cd example
npm install
npm run build
open index.html
# Then you can check the bundle.js and output of console.
```

## Development

## Thanks

- [node-browserify](https://github.com/substack/node-browserify)
- [webpack](https://github.com/webpack/webpack)

## License

MIT
