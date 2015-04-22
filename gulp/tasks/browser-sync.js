var gulp        = require('gulp');
var browserSync = require('browser-sync');

// browser-sync task for starting the server.
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: 'localhost:9000',
    notify: false,
    ghostMode: {
      links: false
    }
  });
});