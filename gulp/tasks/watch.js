var gulp = require('gulp'),
	config = require('../config').watch,
	runSequence = require('gulp-run-sequence'),
	chokidar = require('chokidar'),
	log = console.log.bind(console);

gulp.task('watch',[],function(){
	var src = [
		'src/app/**/*.js'
	]
	,watcher
	,debounce = function(fn, delay) {
		var timer = null;
		return function () {
			var context = this, args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
		};
	}
	,wait = 500
	,callback
	,allowStream = true
	,enableStream = function (){allowStream = true}
	,disableStream = function (){allowStream = false};
	// Handle the error
	function errorHandler(error){
		this.emit('end');
	}

	gulp.watch(config.sass,['sass'/*, 'scsslint'*/]);
	watcher = chokidar.watch('src/app/',{
		ignoreInitial: true
		,usePolling: true
		,interval:     100
	});

	watcher
		.on('change',function(path,stats){

			debounce(function (){
				runSequence('injection');
			},wait)();
		}).on('error',function(error){
			log('Error happened',error);
		}).on('unlink',function(path){
			//log('File',path,'has been removed');
			debounce(function (){
				log('File',path,'has been removed');
				runSequence('injection');
			},wait)();
		}).on('add',function(path){
			//log('File',path,'has been added');
			debounce(function (){
				runSequence('injection');
			},wait)();
		});
});