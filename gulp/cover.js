var gulp = require('gulp');
var config = require('./config');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('cover', ['clean', 'instrument'], function() {
  return gulp.src(config.tests, { read: false })
    .pipe(mocha({
      reporter: 'dot',
      require: ['should']
    }))
    .pipe(istanbul.writeReports());
});

