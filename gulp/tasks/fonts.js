var gulp = require('gulp');

gulp.task('fonts', function () {
    gulp.src(['app/assets/fonts/**'])
        .pipe(gulp.dest('build/assets/fonts'))
});