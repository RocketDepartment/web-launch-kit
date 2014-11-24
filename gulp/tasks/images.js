var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
    var dest = './build/assets/img';
    return gulp.src('./app/assets/img/**/*.*')
        .pipe(changed(dest))
        .pipe(imagemin({progressive: true}))
        .pipe(gulp.dest(dest));
});
