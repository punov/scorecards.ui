/**
 * @ngdoc service
 * @name Scorecards.home.$homeAPIConfig
 * @description
 * URLs to API methods used by Scorecards.home module.
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.home')
		.constant('homeAPIConfig', homeAPIConfig());

	function homeAPIConfig() {
		return {
			scores: 'scores',
		};
	}

})(window.angular);
