var src = 'src',
	build = 'dist',
	production = 'dist',
	styles = 'src/styles',
	util = require('gulp-util'),
	fse = require('fs-extra'),
	jsSrc = src + '/app',
	env = 'dev',
	envJSON = fse.readJsonSync('env/' + env + '.json');

envJSON.env = env;

module.exports = {
	env  	     : envJSON,
	build        : build,
	src          : src,
	browsersync  : {
		development : {
			server : {
				baseDir : [src]
			}
			,reloadDebounce: 1000
			,files: [
				src + '/**/*.css'
				,jsSrc + '/**/*.js'
				,src + '/images/**/*.*'
				,src + '/fonts/*'
				//,src + '/**/*.html'
				,src + '/index.html'
			]
			,port : 3000
		}
	},
	sass         : {
		src     : src + '/styles/*.{sass,scss}',
		dest    : src + '/styles/',
		options : {
		}
	},
	autoprefixer : {
		browsers : [
			'last 20 versions',
			'safari 5',
			'ie 8',
			'ie 9',
			'opera 12.1',
			'ios 6',
			'android 4'
		],
		cascade  : true
	},
	jshint : {
		src : src + '/app/**/*.js'
	},
	watch        : {
		sass : styles + '/**/*.{sass,scss}',
		js   : 'src/app/**/*.js'
	},
	wiredep      : {
		directory : 'src/lib'
	},
	scriptinject : {
		src   : {
			css : [
				'src/styles/**/*.css'
			],
			js  : [
				jsSrc + '/app.js',
				jsSrc + '/**/*module.js',
				jsSrc + '/**/*constant.js',
				jsSrc + '/**/*provider.js',
				jsSrc + '/**/*decorator.js',
				jsSrc + '/**/*enum.js',
				jsSrc + '/**/*model.js',
				jsSrc + '/**/*config.js',
				jsSrc + '/**/*filter.js',
				jsSrc + '/**/*directive.js',
				jsSrc + '/**/*interceptor.js',
				jsSrc + '/**/*service.js',
				jsSrc + '/**/*workflow.js',
				jsSrc + '/**/*repository.js',
				jsSrc + '/**/*resolver.js',
				jsSrc + '/**/*controller.js'
			]
		},
		index : 'src/index.html'
	},
	delete       : {
		src : [build + '/**/*', '!tmp/unicorn.js']
	},
	optimize     : {
		css  : {
			src     : styles + '/**/*.css',
			dest    : build + '/styles'
		},
		js   : {
			src     : build + '/app/**/*.js',
			dest    : build + '/app/',
			options : {
				compress : true
			}
		},
		html : {
			src     : src + '/index.html',
			dest    : build,
			options : {
				collapseWhitespace : true
			}
		},
		htmlmin : {
			src     : build + '/*.html',
			dest    : build,
			options : {
				collapseWhitespace : true,
				removeComments     : true
			}
		}
	},
	revision     : {
		src  : {
			assets : [
				build + '/styles/**/*.css',
				build + '/app/**/*.js',
				build + '/images/**/*'
			],
			base   : build
		},
		dest : {
			assets   : build,
			manifest : {
				name : 'manifest.json',
				path : build
			}
		}
	},
	collect      : {
		src  : [
			build + '/manifest.json',
			build + '/**/*.{html,xml,txt,json,css,js}',
			'!' + build + '/feed.xml'
		],
		dest : build
	},
	icons     : {
		src  : [
			src + '/apple-touch-icon-*-precomposed.png'
			,src + '/*.ico'
		]
		, dest : build
	},
	images     : {
		src  : src + '/images/**/*',
		dest : build
	},
	index      : {
		src  : src + '/_index.html',
		dest : src + '/',
		name : 'index.html'
	},
	chmod : {
		owner  : {
			read    : true,
			write   : true,
			execute : true
		},
		group  : {
			execute : true
		},
		others : {
			execute : true
		}
	}
};