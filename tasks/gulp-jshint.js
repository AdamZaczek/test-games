'use strict';

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();

module.exports = function jshint() {
  return gulp.src([
      "assets/javascript/games/**/*.js",
      "assets/javascript/app.js",
      "assets/javascript/utilities/**/*.js"
    ])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter("jshint-stylish"))
    .pipe(plugins.jshint.reporter("fail"));
};
