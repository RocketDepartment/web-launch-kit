var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
   nodemon({ script: 'server/app.js', ext: 'html js', ignore: ['app/**','build/**','gulp/**','node_modules/**','bower_components/**'] });
});
