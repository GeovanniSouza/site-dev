const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

var browserSync = require('browser-sync').create();

require('./gulpTasks/dev')
require('./gulpTasks/build')
require('./gulpTasks/serve')

gulp.task('default', () => {
    if(util.env.prod) {
        sequence('dev', 'build')
    } else {
        sequence('dev', 'serve')
    }
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
    gulp.watch('./src/**/*.*').on('change', browserSync.reload);
});
