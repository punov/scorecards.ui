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
			'Scorecards.home'
		]
	)
		.config(config)
		.run(run);

	function config
	(
		$logProvider,
		$urlRouterProvider,
		globalConfig,
		homeRouteConfig,
		$locationProvider
	) {
		$logProvider.debugEnabled(globalConfig.debug);
		$urlRouterProvider.otherwise(homeRouteConfig.home);
		$locationProvider.html5Mode(true);
	}

	function run($http, $httpBackend) {

		var scores = [
			{homeTeam: 'cowboys', awayTeam:'stealers', homeScore:0, awayScore:21},
			{homeTeam: 'patriots', awayTeam:'colts', homeScore:0, awayScore:21},
			{homeTeam: 'eagles', awayTeam:'falcons', homeScore:0, awayScore:21},
			{homeTeam: 'eagles', awayTeam:'falcons', homeScore:0, awayScore:21}
		];

		$httpBackend.whenGET('api/scores')
			.respond(function() {
				return [200, scores, {}];
			});
		$httpBackend.whenGET(/^app/).passThrough();
	}
})(window.angular);
