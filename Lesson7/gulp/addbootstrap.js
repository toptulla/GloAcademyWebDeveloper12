var gulp = require('gulp');
var config = require('../package.json').config;

gulp.task('addbootstrap', () => {
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(config.src.js + '/jquery/'));

    gulp.src('./node_modules/popper.js/dist/umd/popper.min.js')
        .pipe(gulp.dest(config.src.js + '/popper.js/'));

    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(config.src.js + '/bootstrap/'));

    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(config.src.css + '/bootstrap/'));

    gulp.src('./node_modules/bootstrap/dist/css/bootstrap-grid.min.css')
        .pipe(gulp.dest(config.src.css + '/bootstrap/'));
});