var gulp = require('gulp'),
	runSequence = require('gulp-run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build',function(callback) {
	runSequence(
		[
			'jscs',
			'jshint'
		],
		'copy:index',
		'env',
		'sass',
		'injection',
		callback);
});