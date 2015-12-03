/**
 * @ngdoc module
 * @name  Scorecards.common.layout
 * @description
 * Module-container of the main layout. Every state should be inherited from this one
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.common.layout', [])
		.config(routesConfig);

	function routesConfig($stateProvider) {

		$stateProvider
			.state('page', {
				abstact: true,
				template: '<!-- PAGE --><div ui-view><!-- child layout could live here --></div>'
			})
			.state('main-layout', {
				// is injected into parent's 'content' view
				abstact: true,
				parent: 'page',
				views: {
					// injecting our layout into the parent layout
					'@page': {
						templateUrl: 'app/common/layout-module/views/main-layout.html'
					}
				}
			});
	}
})(window.angular);
