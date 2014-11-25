var gulp         = require('gulp');
var minifyCSS    = require('gulp-minify-css');
var filesize     = require('gulp-filesize');
var rename       = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cmq          = require('gulp-combine-media-queries');

gulp.task('min-css', function() {
  gulp.src('./build/assets/css/main.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cmq({
        log: true
    }))
    .pipe(filesize())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/assets/css/'))
    .pipe(filesize())
});