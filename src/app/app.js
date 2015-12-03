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
			'ngMockE2E',
			'Scorecards.common',
			'Scorecards.score'
		]
	)
		.config(config)
		.run(run);

	function config
	(
		$logProvider,
		$urlRouterProvider,
		globalConfig,
		scoreRouteConfig,
		$locationProvider
	) {
		$logProvider.debugEnabled(globalConfig.debug);
		$urlRouterProvider.otherwise(scoreRouteConfig.home);
		$locationProvider.html5Mode(true);
	}

	function run($http, $httpBackend, scoreData) {
		$httpBackend.whenGET('api/scores')
			.respond(function() {
				return [200, scoreData, {}];
			});
		$httpBackend.whenGET(/^app/).passThrough();
	}
})(window.angular);
