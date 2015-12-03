var gulp = require('gulp'),
	chmod = require('gulp-chmod'),
	configChmod = require('../config').chmod;

/**
 * remove readonly attributes from
 */
gulp.task('remove-readonly-attributes',function(){
	require('child_process').exec('attrib -r src/app/main-module\*.* /s');
});