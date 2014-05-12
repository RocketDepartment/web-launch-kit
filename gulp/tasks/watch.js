var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
	var server = livereload();

	var reload = function(file) {
		server.changed(file.path);
	};

	gulp.watch('app/scripts/**', ['browserify']);
	gulp.watch('app/styles/**', ['sass']);
	gulp.watch('app/img/**', ['images']);
	gulp.watch(['build/**']).on('change', reload);
});
