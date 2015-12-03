/**
 * @ngdoc module
 * @name  Scorecards.score
 * @description
 * Home module
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.score', [
			'ui.router',
            'Scorecards.common.api',
			'Scorecards.common.layout'
		])
		.config(routesConfig);

	function routesConfig(
		$stateProvider,
        scoreRouteConfig
	) {
		$stateProvider
			.state('score', {
				parent: 'main-layout',
				url: scoreRouteConfig.home,
				views: {
					// injecting our views into the parent layout
					'main@main-layout': {
						templateUrl: 'app/score-module/views/score-main-view.html',
						controller: 'ScoreController',
						controllerAs: 'ctrl'
					}
				}
			});
	}
})(window.angular);
