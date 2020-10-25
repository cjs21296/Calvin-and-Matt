var gulp = require("gulp"), // look in 'node_modules' for 'gulp' package
    sass = require("gulp-sass"), // look in 'node_modules' for 'gulp-sass' package
    cleancss = require("gulp-clean-css"); // look in 'node_modules' for 'gulp-clean-css'

/* you can also run this by typing 'gulp sass' in the command line */
gulp.task("sass", function() {
    return gulp.src("scss/*.scss") // Get source files with gulp.src
        .pipe(sass()) // Sends the files through sass
        .pipe(cleancss()) // Sends the files through cleancss
        .pipe(gulp.dest("styles")); // Outputs the file in the destination folder
});

gulp.task("watch", function() {
    gulp.watch("scss/*.scss", gulp.series("sass"));
});
