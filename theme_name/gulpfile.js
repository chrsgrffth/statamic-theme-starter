'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    concat = require('gulp-concat'),
    coffeeify = require('gulp-coffeeify'),

    // This must match the name of the theme folder.
    theme = 'theme_name';


gulp.task('styles', function () {
  return gulp.src('sass/init.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(theme + '.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function() {
  gulp.src('coffee/**/*.coffee')
    .pipe(coffeeify())
    .pipe(concat(theme + '.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('default', ['styles', 'scripts'], function() {
  gulp.watch('sass/**', ['styles']);
  gulp.watch('coffee/**', ['scripts']);
});