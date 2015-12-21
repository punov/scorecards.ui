/**
 * @ngdoc overview
 * @name  Scorecards
 * @description
 * Scorecards application main module.
 * It is an entry point for entire application
 * All general modules should be placed here
 */

(function(angular) {
	'use strict';

	angular
		.module(
		'Scorecards', [
			'ui.router',
			'ui.scroll',
			'ui.scroll.jqlite',
			'ngMockE2E',
			'Scorecards.common',
			'Scorecards.score',
			'Scorecards.news'
		]
	)
		.config(config)
		.run(run);

	function config
	(
		$logProvider,
		$urlRouterProvider,
		globalConfig,
		scoreRouteConfig
	) {
		$logProvider.debugEnabled(globalConfig.debug);
		$urlRouterProvider.otherwise(scoreRouteConfig.home);
		/**
		 * Uncomment this line to remove the hash from url.
		 * Don't forget to inject $locationProvider to config function
		 */
		//$locationProvider.html5Mode(true);
	}

	function run($http, $httpBackend, scoreData) {
		$httpBackend.whenGET('api/scores')
			.respond(function() {
				return [200, scoreData, {}];
			});
		$httpBackend.whenGET(/^app/).passThrough();
	}
})(window.angular);
