/**
 * Created by stefan on 09.05.17.
 * gulp-clean is replaced by gulp-rimraf
 * http://learningwithjb.com/posts/cleaning-our-build-folder-with-gulp
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var clean = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
//var browserSync = require('browser-sync').create();

// //////////////////////////////////////////////
// Sass to css
// /////////////////////////////////////////////
gulp.task('sass', function () {
    return gulp.src('styles.sass')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});


// ///////////////////////////////////////////////////
// DIST FOLDER
// //////////////////////////////////////////////////

var filesToMove = [
    './bower_components/**/*.*',
    './css/styles.css',
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

// Clean up dist folder
gulp.task('clean', function () {
    return gulp.src(['dist/*'], {read: false})
        .pipe(clean());
});

// Create dist folder
gulp.task('dist', ['clean'], function () {
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(filesToMove, {base: './'})
        .pipe(gulp.dest('dist'));
});

// /////////////////////////////////////////////////
// MINIFY IMAGES
// ////////////////////////////////////////////////

gulp.task('compress-images', function(){
    return gulp.src('images/**')
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest('dist/images/'));
});

// ///////////////////////////////////////////////////
// Watch Task
// ///////////////////////////////////////////////////
gulp.task('watch', function () {
    gulp.watch(['sass/**/*.{scss,sass}', 'styles.sass'], ['sass', 'dist']);

});

// ///////////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////////
gulp.task('default', ['sass', 'watch', 'dist']);
