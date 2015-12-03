/**
 * @ngdoc service
 * @name Scorecards.home.$homeRouteConfig
 * @description
 * Scorecards.home module routes.
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.home')
		.constant('homeRouteConfig', homeRouteConfig());

	function homeRouteConfig() {
		return {
			home: '/'
		};

	}

})(window.angular);
