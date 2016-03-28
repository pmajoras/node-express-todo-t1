"use strict";

var eslint = require('gulp-eslint');
var gulp = require('gulp');

var paths = {
  scripts: ['**/*.js',
    '!bower_components/**/*.js',
    '!node_modules/**/*.js',
    '!typings/*.ts'],
};

gulp.task('eslint', function() {
  return gulp.src(paths.scripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Builds the application
gulp.task('build', ['eslint']);

gulp.task('default', ['build']);