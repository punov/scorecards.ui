/**
 * @ngdoc service
 * @name Scorecards.score.$scoreRouteConfig
 * @description
 * Scorecards.score module routes.
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.score')
		.constant('scoreRouteConfig', scoreRouteConfig());

	function scoreRouteConfig() {
		return {
			home: '/'
		};

	}

})(window.angular);
