var browserify   = require('browserify');
var watchify     = require('watchify');
var reactify     = require('reactify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

function scripts(watch) {
    var bundler, rebundle;
    
    if(watch) {
        bundler = watchify('./app/scripts/app.js');
    } else {
        bundler = browserify('./app/scripts/app.js');
    }

    bundler.transform(reactify);

    rebundle = function() {
        var stream = bundler.bundle({debug: true});
        stream.on('error', handleErrors);
        stream = stream.pipe(source('main.js'));
        return stream.pipe(gulp.dest('./build/scripts'));
    };

    bundler.on('update', rebundle);

    return rebundle();
}

gulp.task('browserify-build', function() {
    return scripts(false);
});

gulp.task('browserify-watch', function() {
    return scripts(true);
});