const gulp = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(sync.stream());
}

function watch() {
  sync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', sync.reload);
  gulp.watch('./js/*.js').on('change', sync.reload);
}

exports.watch = watch;
