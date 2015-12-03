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

	function ScoreController($scope, $interval, scoreService) {
		var that = this;

		that.scores = [];
		that.getScores = getScores;

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
		}

		function init() {
			getScores();
			//pushRequest = $interval(that.getScores, 10000);
		}

		init();
	}
}

)(window.angular);
