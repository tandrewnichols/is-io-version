var gulp = require('gulp');
var codeclimate = require('gulp-codeclimate-reporter');

gulp.task('codeclimate', function() {
  if (process.version.indexOf('v4') > -1) {
    gulp.src('coverage/lcov.info', { read: false })
      .pipe(codeclimate({
        token: '256a58fd2131cb71323cc37a717b50bbb3e9a51bf1eabd8968c82093e4ed13e6'
      }));
  }
});

