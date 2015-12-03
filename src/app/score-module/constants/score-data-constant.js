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
			{homeTeam: 'cowboys', awayTeam:'stealers', homeScore:0, awayScore:21},
			{homeTeam: 'patriots', awayTeam:'colts', homeScore:0, awayScore:21},
			{homeTeam: 'eagles', awayTeam:'falcons', homeScore:0, awayScore:21}
		];
	}

})(window.angular);
