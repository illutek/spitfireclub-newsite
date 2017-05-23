
/**
 * Created by stefan on 09.05.17.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
//var browserSync = require('browser-sync').create();

// //////////////////////////////////////////////
// Sass to css
// /////////////////////////////////////////////
gulp.task('sass', function () {
    return gulp.src('sass/styles.sass')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('minifyCSS', function () {
    return gulp.src('css/styles.css')
        .pipe(minifyCSS({keepBreaks: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'))
});

// ///////////////////////////////////////////////////
// build folder
// //////////////////////////////////////////////////

var filesToMove = [
    './bower_components/**/*.*',
    './css/styles.min.css',
    './fonts/**/*.*',
    './images/**/*.*',
    './js/**/*.*',
    './templates/**/*.*',
    './spitfireclub.info.yml',
    './spitfireclub.libraries.yml',
    './spitfireclub.theme',
    './readme.md',
    './screenshot.png'
];

gulp.task('clean', function(){
    return gulp.src(['build/*'], {read:false})
        .pipe(clean());
});


gulp.task('move',['clean'], function(){
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(filesToMove, { base: './' })
        .pipe(gulp.dest('dist'));
});

// ///////////////////////////////////////////////////
// Watch Task
// ///////////////////////////////////////////////////
gulp.task('watch', function(){
    gulp.watch('sass/**/*.{scss,sass}', ['sass']);
});

// ///////////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////////
gulp.task('default' , ['sass', 'minifyCSS', 'watch']);
