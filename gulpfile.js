var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        extensions: ['.jsx'], 
        debug: true
    }).transform('babelify', {
        presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/style.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});