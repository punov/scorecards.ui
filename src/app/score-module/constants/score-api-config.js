/**
 * @ngdoc service
 * @name Scorecards.score.$scoreAPIConfig
 * @description
 * URLs to API methods used by Scorecards.score module.
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.score')
		.constant('scoreAPIConfig', scoreAPIConfig());

	function scoreAPIConfig() {
		return {
			scores: 'scores',
		};
	}

})(window.angular);
