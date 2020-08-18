const gulp = require('gulp');
const sync = require('browser-sync')
  .create();

const watch = () => {
  sync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./*.html')
    .on('change', sync.reload);
  gulp.watch('./css/*.css')
    .on('change', sync.reload);
  gulp.watch('./js/*.js')
    .on('change', sync.reload);
};

exports.watch = watch;
