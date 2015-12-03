/**
 * @ngdoc service
 * @name Scorecards.home.homeService
 * @requires Scorecards.common.api.api
 * @description
 * Business logic of home module
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.home')
		.service('homeService', homeService);

	function homeService(
		api,
		homeAPIConfig
	) {
		var that = this;

		/* public methods */

		that.getScores = getScores;

		/* implementation */

		function getScores() {
			return api.get(homeAPIConfig.scores);
		}
	}

})(window.angular);
