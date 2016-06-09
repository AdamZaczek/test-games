var gulp = require("gulp");
var jshint = require("gulp-jshint");
var paths = {
  scripts: ["node_modules/dragula/dist/dragula.min.js",
            "node_modules/handlebars/dist/handlebars.min.js",
           ],
  dest: "assets/javascript/vendors",
  myjs: ["assets/javascript/games/*.js",
         "assets/javascript/*.js"
       ],
};

gulp.task("jshint", function(){
  gulp.src("assets/javascript/*.js")
  .pipe(jshint())
  .pipe(jshint.reporter("default"));
});

gulp.task("scripts", function(){
  return gulp.src(paths.scripts)
    .pipe(gulp.dest(paths.dest));
});

gulp.task("watch", function(){
  gulp.watch(paths.myjs, ["jshint", "scripts"]);
});
