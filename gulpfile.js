'use strict'
var syntax = 'sass'; // SASS || SCSS
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sourcemap = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src('app/' + syntax + '/**/*.' + syntax + '')
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 8 versions'],
            cascade: false
        }))
        .pipe(concat('styles.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function () {
    gulp.watch('app/' + syntax + '/**/*.' + syntax + '', gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('styles', 'watch'));