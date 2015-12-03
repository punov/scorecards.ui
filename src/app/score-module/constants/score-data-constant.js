/**
 * @ngdoc service
 * @name Scorecards.score.$scoreData
 * @description
 * Mock data for getScores request
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.score')
		.constant('scoreData', scoreData());

	function scoreData() {
		return [
			{homeTeam: 'Cowboys', awayTeam: 'Stealers', homeScore: 0, awayScore: 21},
			{homeTeam: 'Patriots', awayTeam: 'Colts', homeScore: 7, awayScore: 18},
			{homeTeam: 'Eagles', awayTeam: 'Falcons', homeScore: 23, awayScore: 21}
		];
	}

})(window.angular);
