var gulp = require('gulp'),
	chmod = require('gulp-chmod'),
	configChmod = require('../config').chmod;

gulp.task(
	'chmod', function() {
		return gulp.src('src/app/main-module/**/*.html')
			.pipe(chmod(configChmod))
			.pipe(gulp.dest('src/app/main-module'));
	}
);