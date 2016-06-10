'use strict';

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();

module.exports = function javascriptVendor() {
  return gulp.src([
      "node_modules/handlebars/dist/handlebars.min.js",
      "node_modules/dragula/dist/dragula.min.js",
      "node_modules/requirejs/require.js"
    ])
    .pipe(plugins.concat("vendors.js"))
    .pipe(gulp.dest("assets/javascript"));
};
