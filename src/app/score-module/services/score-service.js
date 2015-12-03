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

		/**
		 * @ngdoc method
		 * @name getScores
		 * @methodOf Scorecards.score.scoreService
		 *
		 * @description
		 * Return promise
		 *
		 * @returns {$promise} Promise with mock scores data as a success result.
		 */
		function getScores() {
			return api.get(scoreAPIConfig.scores);
		}
	}

})(window.angular);
