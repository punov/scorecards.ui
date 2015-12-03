var gulp = require('gulp'),
	config = require('../config'),
	wiredep = require('wiredep').stream,
	inject = require('gulp-inject');

gulp.task(
	'injection', function(){
		var sources = gulp.src(
			config.scriptinject.src.css.concat(config.scriptinject.src.js),
			{read : false}
		);

		var options = {relative : true};

		//gulp.src(config.scriptinject.index)
		gulp.src('src/index.html')
			.pipe(
				//wiredep(config.wiredep)
				wiredep({
					//directory : 'src/lib'
				})
			)
			.pipe(inject(sources, options))
			.pipe(gulp.dest('src'));
	}
);