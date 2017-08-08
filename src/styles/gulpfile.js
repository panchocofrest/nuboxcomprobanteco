var gulp = require('gulp');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var $= require('gulp-load-plugins')();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sassPaths = [
  'scss',
];

/*
  Procesa el archivo general
*/
gulp.task('nbx-general', function() {
  return gulp.src('./scss/nbx-general.scss')
    .pipe(sourcemaps.init())
    .pipe($.sass({
      includePaths: sassPaths
      //outputStyle: 'compressed'
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(sourcemaps.write())
  .pipe(rename('nbx-general.css'))
  .pipe(gulp.dest('./css'));
});
/*
  Procesa el archivo comprobante co de la estructura
*/
gulp.task('comprobante-co', function() {
  return gulp.src('./scss/comprobante-co.scss')
    .pipe(sourcemaps.init())
    .pipe($.sass({
      includePaths: sassPaths
      //outputStyle: 'compressed'
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(sourcemaps.write())
  .pipe(rename('comprobante-co.css'))
  .pipe(gulp.dest('./css'));
});
/*
  Procesa el archivo comprobante co de fixes
*/
gulp.task('comprobante-co-general', function() {
  return gulp.src('./scss/comprobante-co-general.scss')
    .pipe(sourcemaps.init())
    .pipe($.sass({
      includePaths: sassPaths
      //outputStyle: 'compressed'
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(sourcemaps.write())
  .pipe(rename('comprobante-co-general.css'))
  .pipe(gulp.dest('./css'));
});
/*
	Añadimos una tarea watch para que observe los cambios a los archivos scss
 */
gulp.task('default', ['nbx-general', 'comprobante-co', 'comprobante-co-general'], function() {
  gulp.watch(['./scss/**/*.scss'], ['nbx-general', 'comprobante-co', 'comprobante-co-general']);
});