/**
* @ngdoc controller
* @name Scorecards.score:ScoreController
* @requires $scope
* @requires $state
* @description
* Some desciption
*/

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.score')
		.controller('ScoreController', ScoreController);

	function ScoreController($scope, $state, $interval, scoreService) {
		var that = this;

		that.scores = [];

		var pushRequest;

		function stopInterval() {
			if (angular.isDefined(pushRequest)) {
				$interval.cancel(pushRequest);
				pushRequest = undefined;
			}
		}

		$scope.$on('$destroy', function() {
			// Make sure that the interval is destroyed
			stopInterval();
		});

		function getScores() {
			scoreService.getScores()
				.then(function(response) {
					that.scores = response.data;
				});
			console.log('Scores updated');
		}

		function init() {
			getScores();
			//pushRequest = $interval(getScores, 10000);
		}

		init();
	}
}

)(window.angular);
