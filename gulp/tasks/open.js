var gulp = require('gulp');
var open = require("gulp-open");
var config = require('../config');

gulp.task('open', ['build'], function() {

	var options = {
		url: "http://localhost:" + config.port,
		app: "google chrome"
	};

	return gulp.src("app/index.html").pipe(open("", options));
});
