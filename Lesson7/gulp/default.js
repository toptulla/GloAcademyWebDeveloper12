var gulp = require('gulp');
var runseq = require('run-sequence');

gulp.task('default', function () {
  runseq(
    'addbootstrap',
    'copy',
    'sass',
    'server',
    'copy:watch',
    'sass:watch')
});