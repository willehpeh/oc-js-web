const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const merge = require('gulp-merge');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');


gulp.task('processJS', () => {
  merge(gulp.src('node_modules/babel-polyfill/browser.js'),
  gulp.src('public/javascripts/**/*.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/javascripts'));
});

gulp.task('processHTML', () => {
  gulp.src('public/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: './dist',
    port: 8080,
    ui: {
      port: 8081
    }
  });
});

gulp.task('default', (callback) => {
  runSequence(['processJS', 'processHTML'], 'browser-sync', callback);
});