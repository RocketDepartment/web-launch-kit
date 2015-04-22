var gulp = require('gulp');

gulp.task('build', ['sass', 'images', 'fonts', 'browserify-watch']);