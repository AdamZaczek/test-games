'use strict';

var gulp = require("gulp");
var jshint = require("./tasks/gulp-jshint");
var javascriptVendor = require("./tasks/gulp-javascript-vendor");
var javascriptExport = require("./tasks/gulp-javascript-export");

gulp.task("jshint", jshint);
gulp.task("javascriptVendor", javascriptVendor);
gulp.task("javascriptExport", javascriptExport);

gulp.task("watch", function watch() {
  gulp.watch([
    "assets/javascript/games/**/*.js",
    "assets/javascript/app.js",
    "assets/javascript/utilities/**/*.js"
  ], jshint);
});
gulp.task("default", ["jshint", "javascriptVendor", "javascriptExport"]);
