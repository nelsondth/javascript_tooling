var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './dist/',
    livereload: true
  });
});

gulp.task('haml', function () {
  gulp.src('./app/views/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('files:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch('./app/views/**/*.haml', ['haml']);
});

gulp.task('default', function(){
  gulp.run('sass');
  gulp.run('haml');
  gulp.run('connect');
  gulp.run('files:watch');
});