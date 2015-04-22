var changed    = require('gulp-changed');
var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var notify     = require('gulp-notify');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
  var dest = './build/assets/img';
  return gulp.src('./app/assets/img/**/*.*')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(changed(dest))
    .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest(dest));
});
