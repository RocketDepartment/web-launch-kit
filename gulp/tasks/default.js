var gulp = require('gulp');

gulp.task('default', ['build', 'watch','browserify-watch', 'nodemon', 'open']);
