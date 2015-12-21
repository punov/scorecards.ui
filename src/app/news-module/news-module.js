/**
 * @ngdoc module
 * @name  Scorecards.news
 * @description
 * News module, show news infinite scroll with watcher statistics
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.news', [
			'ui.router',
			'Scorecards.common.infinite',
			'Scorecards.common.layout',
			'Scorecards.common.utils'
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
					'main@main-layout': {
						templateUrl: 'app/news-module/views/news-main-view.html',
						controller: 'NewsController',
						controllerAs: 'ctrl'
					}
				}
			});
	}
})(window.angular);
