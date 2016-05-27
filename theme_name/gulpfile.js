// Statamic Starter Theme.
// This gulpfile will run browserify, uglify the JS, and process the SCSS. To
// get it going:
// 
// 1. Find and replace all instances of "theme_name" with the name of your theme.
// 2. Run `npm install` to install the dependences.
// 3. Run `gulp` to build and watch your files.

'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    coffeeify = require('coffeeify'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    resolutions = require('browserify-resolutions'),
    buff = require('vinyl-buffer'), // to transform the browserify results into a 'stream'
    source = require('vinyl-source-stream'),
    sourcemaps  = require('gulp-sourcemaps'),

    // This must match the name of the theme folder.
    theme = 'theme_name';


gulp.task('styles', function () {
  gulp.src('./sass/' + theme + '.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(theme + '.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function() {
  browserify({
    entries: ['./coffee/' + theme + '.coffee'],
    debug: true,
    extensions: ['coffee'],
    transform: ['coffeeify']
  })
  .bundle()
  .pipe(source(theme + '.js'))
  .pipe(buff())
  .pipe(sourcemaps.init({
    loadMaps: true,
    debug: true
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./js'))
  .pipe(notify(theme + '.js compiled.'));
})

gulp.task('default', ['styles', 'scripts'], function() {
  gulp.watch('sass/**', ['styles']);
  gulp.watch('coffee/**', ['scripts']);
});
