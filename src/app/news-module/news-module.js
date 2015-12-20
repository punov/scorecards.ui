/**
 * @ngdoc module
 * @name  Scorecards.news
 * @description
 * News module, show news, infinite scroll
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.news', [
			'ui.router',
            'Scorecards.common.api',
			'Scorecards.common.infinite',
			'Scorecards.common.layout',
			'Scorecards.common.watch'
		])
		.config(routesConfig);

	function routesConfig(
		$stateProvider,
		newsRouteConfig
	) {
		$stateProvider
			.state('news', {
				parent: 'main-layout',
				url: newsRouteConfig.news,
				views: {
					// injecting our views into the parent layout
					'main@main-layout': {
						templateUrl: 'app/news-module/views/news-main-view.html',
						controller: 'NewsController',
						controllerAs: 'ctrl'
					}
				}
			});
	}
})(window.angular);
