[![Build Status](https://travis-ci.org/tandrewnichols/is-io-version.png)](https://travis-ci.org/tandrewnichols/is-io-version) [![downloads](http://img.shields.io/npm/dm/is-io-version.svg)](https://npmjs.org/package/is-io-version) [![npm](http://img.shields.io/npm/v/is-io-version.svg)](https://npmjs.org/package/is-io-version) [![Code Climate](https://codeclimate.com/github/tandrewnichols/is-io-version/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/is-io-version) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/is-io-version/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/is-io-version) [![dependencies](https://david-dm.org/tandrewnichols/is-io-version.png)](https://david-dm.org/tandrewnichols/is-io-version)

# is-io-version

Check whether a given node version is io.js or node.js

## Installation

`npm install --save is-io-version`

## Summary

Pass a version, get true or false back. Pretty simple really.

```js
var isIo = require('is-io-version');

isIo('0.10.0'); // false
isIo('1.0.0'); // true
isIo('2.0.0'); // true
isIo('3.0.0'); // true
isIo('4.0.0'); // false
```

## Contributing

Please see [the contribution guidelines](CONTRIBUTING.md).
