'use strict';

var gulp = require("gulp");
var jshint = require("./tasks/gulp-jshint");
var javascriptVendor = require("./tasks/gulp-javascript-vendor");

gulp.task("jshint", jshint);
gulp.task("javascriptVendor", javascriptVendor);

gulp.task("watch", function watch() {
  gulp.watch([
    "assets/javascript/games/**/*.js",
    "assets/javascript/app.js"
  ], jshint);
});
gulp.task("default", ["jshint", "javascriptVendor"]);
