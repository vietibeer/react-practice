const concat = require('gulp-concat');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
// const autoprefixer = require('gulp-autoprefixer');

gulp.task('concat', function () {
    return gulp.src('./test-gulp/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./test-gulp/'))
});

gulp.task('sourcemaps', function () {
    return gulp.src('./test-gulp/*.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./test-gulp/'))
});

// gulp.task('default', () =>
//     gulp.src('./test-gulp/*.js')
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('./public'))
// );
