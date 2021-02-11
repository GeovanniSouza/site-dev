const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')
const useref = require('gulp-useref')

gulp.task('build', ['css', 'css-secondary', 'js', 'js-secondary', 'html', 'img', 'fonts'])

gulp.task('css', () => {
    return gulp.src('app/assets/css/styles.min.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(gulp.dest('dist/assets/css'))
})

gulp.task('css-secondary', () => {
    return gulp.src(['app/assets/css/*.css', '!app/assets/css/styles.min.css', '!app/assets/css/bootstrap.css'])
        .pipe(gulp.dest('dist/assets/css'))
})

gulp.task('js', () => {
    return gulp.src('app/assets/js/scripts.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
})

gulp.task('js-secondary', () => {
    return gulp.src(['app/assets/js/*.js', '!app/assets/js/scripts.min.js'])
        .pipe(gulp.dest('dist/assets/js'))
})

gulp.task('html', () => {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('img', () => {
    return gulp.src('app/assets/img/**/*.*')
        .pipe(cache(imagemin({
          interlaced: true,
        })))
        .pipe(gulp.dest('dist/assets/img'))
})

gulp.task('fonts', () => {
    return gulp.src('app/assets/fonts/**/*.*')
        .pipe(gulp.dest('dist/assets/fonts'))
})
