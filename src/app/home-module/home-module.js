/**
 * @ngdoc module
 * @name  Scorecards.home
 * @description
 * Home module
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.home', [
			'ui.router',
            'Scorecards.common.api'
		])
		.config(routesConfig);

	function routesConfig(
		$stateProvider,
        homeRouteConfig
	) {
		$stateProvider
			.state('page', {
				abstact: true,
				template: '<!-- PAGE --><div ui-view><!-- child layout could live here --></div>'
			})
			.state('home-layout', {
				// is injected into parent's 'content' view
				abstact: true,
				parent: 'page',
				views: {
					// injecting our layout into the parent layout
					'@page': {
						templateUrl: 'app/home-module/views/home-layout.html'
					}
				}
			})
			.state('home', {
				parent: 'home-layout',
				url: homeRouteConfig.home,
				views: {
					// injecting our views into the parent layout
					'main@home-layout': {
						templateUrl: 'app/home-module/views/home-main-view.html',
						controller: 'HomeController',
						controllerAs: 'ctrl'
					}
				},
				data: {pageTitle: 'NFL Scorecards'}
			});
	}
})(window.angular);
