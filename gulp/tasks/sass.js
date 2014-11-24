var sass         = require('gulp-sass');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var filter       = require('gulp-filter');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function() {
    return gulp.src('./app/assets/styles/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            sourceComments: 'map'
        }))
        .on('error', handleErrors)
        .pipe(gulp.dest('./build/assets/css'))
        .pipe(filter('**/*.css'))
        .pipe(reload({stream:true})); 
});