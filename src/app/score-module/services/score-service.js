/**
 * @ngdoc service
 * @name Scorecards.score.scoreService
 * @requires Scorecards.common.api.api
 * @description
 * Business logic of the Score module
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.score')
		.service('scoreService', scoreService);

	function scoreService(
		api,
		scoreAPIConfig
	) {
		var that = this;

		/* public methods */

		that.getScores = getScores;

		/* implementation */

		function getScores() {
			return api.get(scoreAPIConfig.scores);
		}
	}

})(window.angular);
