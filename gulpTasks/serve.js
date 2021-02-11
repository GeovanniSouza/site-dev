const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const sequence = require('run-sequence')

gulp.task('watch', () => {
    watch('app/**/*.html')
    watch('app/**/*.scss', () => sequence('scss', 'min.css'))
    watch('app/assets/scripts/**/*.js', () => gulp.start(['babel.js', 'min.js']))
    watch('app/assets/imgs/**/*.*')
})

gulp.task('serve', ['watch'], () => {
    return gulp.src('app').pipe(webserver({
        livereload: true,
        port: 3000,
        open: true
    }))
})
