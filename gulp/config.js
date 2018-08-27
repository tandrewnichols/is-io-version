const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '..') + path.sep,
  tests: ['test/**/*.js', '!test/helpers/**/*.js'],
  lib: ['lib/**/*.js']
};
