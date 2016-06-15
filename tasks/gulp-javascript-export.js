'use strict';

var gulp = require("gulp");

module.exports = function javascriptExport() {
  return gulp.src([
      "node_modules/text/text.js"
    ])
    .pipe(gulp.dest("assets/javascript"));
};
