var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  plumber = require('gulp-plumber'),
  clean = require('gulp-clean'),
  watch = require('gulp-watch'),
  rename = require('gulp-rename'),
  size = require('gulp-size'),
  notify = require('gulp-notify'),
  exec = require('gulp-exec')

gulp.task('default', ['build', 'watch'])

gulp.task('build', ['clean', 'styles'])

gulp.task('clean', function () {
    return gulp.src('public/assets/styles/**.*', {read: false})
      .pipe(clean())
})

gulp.task('watch', function() {
    gulp.watch(['./resources/styles/**/*.styl', './gulpfile.js']).on('change', function (file) {
        gulp.start('default')
    })
})

gulp.task('styles', function() {
	gulp.src('resources/styles/main.styl')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(stylus())
  .pipe(autoprefixer('last 1 version'))
  .pipe(gulp.dest('./public/assets/styles/'))
  .pipe(cssnano('./public/assets/styles/main.css'))
  .pipe(sourcemaps.write('./'))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./public/assets/styles/'))
  .pipe(size())
  .pipe(notify('Stylus compilation complete.'))
})
