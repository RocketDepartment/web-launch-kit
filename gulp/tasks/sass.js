var sass      = require('gulp-sass');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function() {
    return gulp.src('./app/assets/styles/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            sourceComments: 'map'
        }))
        .on('error', handleErrors)
        .pipe(gulp.dest('./build/assets/css'));
});