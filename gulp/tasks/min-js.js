var gulp     = require('gulp');
var uglify   = require('gulp-uglify');
var filesize = require('gulp-filesize');
var rename   = require('gulp-rename');

gulp.task('min-js', function() {
  gulp.src('./build/scripts/main.js')
    .pipe(filesize())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'))
    .pipe(filesize())
});