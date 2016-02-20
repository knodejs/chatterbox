var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('default', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html',
      port:8082,
      open: true
    }));
});