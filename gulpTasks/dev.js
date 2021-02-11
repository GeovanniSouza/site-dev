const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const sequence = require('run-sequence')
const babel = require('gulp-babel')

gulp.task('dev', () => {
    sequence('scss', 'min.css', 'babel.js', 'min.js')
})

gulp.task('scss', () => {
    return gulp.src('app/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('app/assets/css'))
})

gulp.task('min.css', () => {
    return gulp.src([
        'app/assets/css/bootstrap.css', 
        'app/assets/css/styles.css',
        'app/assets/css/carousel.css', 
    ])
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('app/assets/css'))        
})

gulp.task('babel.js', () => {
    return gulp.src(['app/assets/scripts/components/*.js', 'app/assets/scripts/scripts.js'])
        .pipe(babel({ presets: ['env'] }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('app/assets/js'))
})

gulp.task('min.js', () => {
    return gulp.src([
                    'app/assets/scripts/lib/jquery.js',
                    'app/assets/scripts/lib/popper.js',
                    'app/assets/scripts/lib/bootstrap.js',
                    'app/assets/scripts/lib/carousel.js',
                    'app/assets/js/scripts.js'
                ])
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('app/assets/js'))
})
