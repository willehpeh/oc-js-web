const gulp = require('gulp');
const imgmin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const concatCSS = require('gulp-concat-css');
const uglifyCSS = require('gulp-uglifycss');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const lazypipe = require('lazypipe');

const runSequence = require('run-sequence');

gulp.task('copyAllHTML', () => {
  gulp.src('public/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('minifyImages', () => {
  gulp.src('public/images/**/*')
    .pipe(imgmin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('processJS', () => {
  gulp.src('public/javascripts/**/*')
    .pipe(babel({
      presets: ['env']
    }))
    // .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/javascripts'));
});

gulp.task('sassToCSS', () => {
  return gulp.src('public/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('processCSS', () => {
  gulp.src('public/stylesheets/**/*.css')
    .pipe(uglifyCSS())
    .pipe(gulp.dest('dist/stylesheets'));
});

gulp.task('build', (callback) => {
  runSequence('sassToCSS', ['copyAllHTML', 'minifyImages', 'processJS', 'processCSS'], callback)
});

gulp.task('watch', ['server'], () => {
  gulp.watch('public/stylesheets/**.*', ['processCSS']);
  gulp.watch('public/javascripts/**.*', ['prodJS']);
  gulp.watch('public/*.html', ['copyAllHTML']);
  gulp.watch('public/images/**/*', ['minifyImages']);

  gulp.watch('public/javascripts/**.*', browserSync.reload);
  gulp.watch('public/*.html', browserSync.reload);
  gulp.watch('public/images/**/*', browserSync.reload);
});

gulp.task('server', () => {
  browserSync.init({
    server: './public',
    port: 3001,
    ui: {
      port: 3002
    }
  })
});

gulp.task('prodJS', () => {
  gulp.src('public/**/*.html')
    .pipe(useref({}, lazypipe().pipe(sourcemaps.init, {loadMaps: true})))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulpIf('*.js', babel({
      presets: ['env']
    })))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'));
});

gulp.task('prod', (callback) => {
  runSequence('sassToCSS', ['copyAllHTML', 'minifyImages', 'prodJS', 'processCSS'], callback);
});