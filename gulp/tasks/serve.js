var gulp   = require('gulp'),
    config = require('../config').watch,
    runSequence = require('gulp-run-sequence');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('serve',function(callback) {
    runSequence(
        'build',
        'browsersync',
        'watch',
        callback
    );
});