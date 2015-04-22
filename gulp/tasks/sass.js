var sass         = require('gulp-sass');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var filter       = require('gulp-filter');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function() {
  return gulp.src('./app/assets/styles/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass({
      errLogToConsole: false,
      sourceComments: 'map'
    }))
    .pipe(gulp.dest('./build/assets/css'))
    .pipe(filter('**/*.css'))
    .pipe(reload({stream:true})); 
});