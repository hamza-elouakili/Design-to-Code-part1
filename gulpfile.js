var gulp = require("gulp")
var sass = require("gulp-sass")
var jade = require("gulp-jade")
var browserSync = require("browser-sync").create()

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "public/"
    }
  })
})

gulp.task("sass", function() {
  return gulp
    .src("app/sass/**/*.sass")
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest("public/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
})

gulp.task("jade", function() {
  return gulp
    .src("app/jade/**/*.jade")
    .pipe(jade()) // pip to jade plugin
    .pipe(gulp.dest("public")) // tell gulp our output folder
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
})

gulp.task("watch", ["browserSync", "sass", "jade"], function() {
  gulp.watch("app/sass/**/*.sass", ["sass"])
  gulp.watch("app/jade/**/*.jade", ["jade"])

  // Other watchers
  gulp.watch("app/js/**/*.js", browserSync.reload)
})
