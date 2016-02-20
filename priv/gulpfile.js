var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html',
      port:8082,
      open: true
    }));
});