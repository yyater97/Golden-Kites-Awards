'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({style:'compressed'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./view/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default',['sass','watch']);