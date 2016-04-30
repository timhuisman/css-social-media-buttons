var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    clean        = require('gulp-clean'),
    svgSprite    = require('gulp-svg-sprite'),
    gulpSequence = require('gulp-sequence');

var cssDist    = 'dist/stylesheets',
    svgDist    = 'dist/svg-sprite'
    svgCssSrc  = 'src/stylesheets/icons'
    imgDist    = 'dist/images';

// Clean
gulp.task('clean-styles', function () {
  gulp.src(cssDist, {read: false})
    .pipe(clean());
});

gulp.task('clean-images', function () {
  gulp.src(imgDist, {read: false})
    .pipe(clean());
});

gulp.task('clean-svg-sprite', function () {
  gulp.src(imgDist, {read: false})
    .pipe(clean());
});

gulp.task('clean-svg-sprite-src', function () {
  gulp.src(svgDist, {read: false})
    .pipe(clean());
});

// Styles
gulp.task('styles', function() {
  gulp.src('src/stylesheets/csmb.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDist))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(cssDist))
    .pipe(rename({ suffix: '-min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(cssDist));
});

// SVG Sprite
gulp.task('svg-sprite', function() {
  gulp.src('src/images/*.svg')
    .pipe(svgSprite({
      mode : {
        css : {
          dest       : '.',
          prefix     : "%csmb-%s",
          sprite     : "../images/icons.svg",
          dimensions : false,
          bust       : false,
          render     : {
            css      : true
          },
          example    : true,
          layout     : 'horizontal',
          common     : 'csmb, .csmb-flat'
        }
      },
      shape : {
        dimension : {
          precision : 5,
        }
      }
    }))
    .pipe(gulp.dest(svgDist));
});

gulp.task('move-svg-css', function() {
  gulp.src(svgDist + '/sprite.css')
    .pipe(rename(function (path) {
      path.basename = '_sprite';
      path.extname = '.scss';
    }))
    .pipe(gulp.dest(svgCssSrc));
});

gulp.task('move-svg-sprite', function() {
  gulp.src(svgDist + '/dist/images/icons.svg')
    .pipe(gulp.dest(imgDist));
});

// Default
gulp.task('default', gulpSequence('clean-svg-sprite', 'clean-images', 'svg-sprite', 'move-svg-css', 'move-svg-sprite', 'clean-svg-sprite-src', 'clean-styles', 'styles'));
