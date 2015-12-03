var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	gulpFilter = require('gulp-filter'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	config = require('../config'),
	chmod = require('gulp-chmod');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task(
	'sass', function() {
		var sassConfig = config.sass.options;

		sassConfig.onError = function(error) {
			console.log(error);
		};

		var filter = gulpFilter(['*.css', '!*.map']);

		return gulp.src(config.sass.src)
			.pipe(gulpFilter(['*', '!ie.sass']))
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(sass(sassConfig))
			.pipe(autoprefixer(config.autoprefixer))
			.pipe(filter) // Don’t write sourcemaps of sourcemaps
			.pipe(sourcemaps.write('./maps', {includeContent : false}))
			.pipe(filter.restore()) // Restore original files
			.pipe(chmod(config.chmod))
			.pipe(gulp.dest(config.sass.dest));
	}
);