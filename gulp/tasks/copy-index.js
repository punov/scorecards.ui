var gulp = require('gulp'),
	rename = require('gulp-rename'),
	config = require('../config').index,
	chmod = require('gulp-chmod'),
	configChmod = require('../config').chmod;

/**
 * Copy _index.html template to index.html
 */
gulp.task(
	'copy:index', function() {
		return gulp.src(config.src)
			.pipe(rename(config.name))
            .pipe(chmod(configChmod))
			.pipe(gulp.dest(config.dest))
	}
);