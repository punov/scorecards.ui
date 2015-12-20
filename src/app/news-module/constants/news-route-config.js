/**
 * @ngdoc service
 * @name Scorecards.news.$newsRouteConfig
 * @description
 * Scorecards.news module routes.
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.news')
		.constant('newsRouteConfig', newsRouteConfig());

	function newsRouteConfig() {
		return {
			news: '/news'
		};

	}

})(window.angular);
