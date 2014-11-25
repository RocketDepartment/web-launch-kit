var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', function() {
    gulp.watch('app/assets/styles/**', ['sass']);
    gulp.watch('app/assets/fonts/**', ['fonts']);
    gulp.watch('app/assets/img/**', ['images']);
    // gulp.watch('app/scripts/**/*.js', ['browserify']);
    gulp.watch(['build/**/*.{js, html}']).on('change', browserSync.reload);
});
