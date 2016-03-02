var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    clean        = require('gulp-clean');

var dist = 'dist/stylesheets';

// Clean
gulp.task('clean-styles', function () {
  gulp.src(dist, {read: false})
    .pipe(clean());
});

// Styles
gulp.task('styles', function() {
  gulp.src('src/stylesheets/csmb.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dist))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(dist))
    .pipe(rename({ suffix: '-min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(dist));
});

// Default
gulp.task('default', ['clean-styles', 'styles']);

// Watch
gulp.task('watch', function(callback) {
  gulp.watch('src/stylesheets/**/*.scss', ['styles']);
});
